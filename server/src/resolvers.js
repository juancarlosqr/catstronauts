const resolvers = {
  Query: {
    tracksForHome: (_parent, _args, { dataSources }) =>
      dataSources.trackAPI.getTracks(),

    track: (_parent, { id }, { dataSources }) =>
      dataSources.trackAPI.getTrack(id),
  },
  Mutation: {
    incrementTrackViews: async (_, { id }, { dataSources }) => {
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(id);

        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for track ${id}`,
          track,
        };
      } catch (err) {
        return {
          code: err.extensions.response.status,
          success:
            err.extensions.response.status >= 200 &&
            err.extensions.response.status < 300,
          message: err.extensions.response.body,
          track: null,
        };
      }
    },
  },
  Track: {
    author: ({ authorId }, _args, { dataSources }) =>
      dataSources.trackAPI.getAuthor(authorId),

    modules: ({ id }, _args, { dataSources }) =>
      dataSources.trackAPI.getTrackModules(id),
    durationInSeconds: ({ length }) => length,
  },
  Module: {
    durationInSeconds: ({ length }) => length,
  },
};

module.exports = resolvers;
