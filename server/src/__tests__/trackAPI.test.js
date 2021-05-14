const { ApolloServer, gql } = require('apollo-server');
const { createTestClient } = require('apollo-server-testing');
const casual = require('casual');
const typeDefs = require('../schema');
const resolvers = require('../resolvers');
const TrackAPI = require('../datasources/track-api');

casual.seed(4242);

const mockTracksResponse = [
  {
    id: casual.uuid,
    title: casual.sentence,
    authorId: casual.uuid,
    thumbnail: casual.url,
    length: casual.integer(1, 12),
    modulesCount: casual.integer(1, 5),
  },
  {
    id: casual.uuid,
    title: casual.sentence,
    authorId: casual.uuid,
    thumbnail: casual.url,
    length: casual.integer(1, 12),
    modulesCount: casual.integer(1, 5),
  },
];

const GET_LAUNCHES = gql`
  query getTracks {
    tracksForHome {
      id
      title
      length
      thumbnail
      modulesCount
    }
  }
`;

test('fetches tracks', async () => {
  const trackAPI = new TrackAPI();

  // create a test server to test against,
  // using our production typeDefs, resolvers, and dataSources
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({ trackAPI }),
  });

  // mock the dataSource's underlying fetch methods
  trackAPI.getTracks = jest.fn(() => mockTracksResponse);

  // use the test server to create a query function
  const { query } = createTestClient(server);

  // run query against the server and snapshot the output
  const res = await query({ query: GET_LAUNCHES });
  expect(res).toMatchSnapshot();
});
