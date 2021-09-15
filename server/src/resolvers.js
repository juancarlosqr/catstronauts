const resolvers = {
  Query: {
    tracksForHome: (_parent, _args, { dataSources }) =>
      dataSources.trackAPI.getTracks(),

    track: (_parent, { id }, { dataSources }) =>
      dataSources.trackAPI.getTrack(id),
  },
  Mutation: {
    incrementTrackViews: async (_, { id }, { dataSources }) => {
      const track = await dataSources.trackAPI.incrementTrackViews(id);

      return {
        code: 200,
        success: true,
        message: `Successfully incremented number of views for track ${id}`,
        track,
      };
    },
  },
  Track: {
    author: ({ authorId }, _args, { dataSources }) =>
      dataSources.trackAPI.getAuthor(authorId),

    modules: ({ id }, _args, { dataSources }) =>
      dataSources.trackAPI.getTrackModules(id),
  },
};

module.exports = resolvers;
