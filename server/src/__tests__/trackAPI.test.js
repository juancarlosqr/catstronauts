const { ApolloServer, gql } = require('apollo-server');
const { createTestClient } = require('apollo-server-testing');
const typeDefs = require('../schema');
const resolvers = require('../resolvers');
const TrackAPI = require('../datasources/track-api');
const { mockAuthorResponse, mockTracksResponse } = require('../utils/mocks');

describe('trackAPI DataSource', () => {
  it('fetches tracks', async () => {
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

    // create query
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

    // use the test server to create a query function
    const { query } = createTestClient(server);

    // run query against the server and snapshot the output
    const res = await query({ query: GET_LAUNCHES });
    expect(res).toMatchSnapshot();
  });

  it('fetches tracks with author', async () => {
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
    trackAPI.getAuthor = jest.fn(() => mockAuthorResponse);

    // create query
    const GET_LAUNCHES_AUTHOR = gql`
      query getTracksWithAuthor {
        tracksForHome {
          id
          title
          length
          thumbnail
          modulesCount
          author {
            id
            name
            photo
          }
        }
      }
    `;

    // use the test server to create a query function
    const { query } = createTestClient(server);

    // run query against the server and snapshot the output
    const res = await query({ query: GET_LAUNCHES_AUTHOR });
    expect(res).toMatchSnapshot();
  });
});
