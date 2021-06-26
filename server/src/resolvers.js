const resolvers = {
  Query: {
    tracksForHome: (_parent, _args, { dataSources }) =>
      dataSources.trackAPI.getTracks(),

    track: (_parent, { id }, { dataSources }) =>
      dataSources.trackAPI.getTrack(id),
  },
  Track: {
    author: ({ authorId }, _args, { dataSources }) =>
      dataSources.trackAPI.getAuthor(authorId),

    modules: ({ id }, _args, { dataSources }) =>
      dataSources.trackAPI.getTrackModules(id),
  },
};

module.exports = resolvers;
