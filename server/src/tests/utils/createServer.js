const { ApolloServer } = require('apollo-server');
const typeDefs = require('../../schema');
const resolvers = require('../../resolvers');
const TrackAPI = require('../../datasources/track-api');
const { mockAuthorResponse, mockTracksResponse } = require('../../utils/mocks');

const createServer = () => {
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

  return server;
};

module.exports = createServer;
