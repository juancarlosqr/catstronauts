const { ApolloServer } = require('apollo-server');
const typeDefs = require('../../schema');
const resolvers = require('../../resolvers');
const TrackAPI = require('../../datasources/track-api');
const {
  mockTracksResponse,
  mockTrackResponse,
  mockTrackModulesResponse,
  mockAuthorResponse,
} = require('../../utils/mocks');

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
  trackAPI.getTrack = jest.fn(() => mockTrackResponse);
  trackAPI.getTrackModules = jest.fn(() => mockTrackModulesResponse);
  trackAPI.getAuthor = jest.fn(() => mockAuthorResponse);

  return server;
};

module.exports = createServer;
