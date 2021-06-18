const resolvers = {
  Query: {
    tracksForHome: (_parent, _args, { dataSources }) =>
      dataSources.trackAPI.getTracks(),
  },
  Track: {
    author: ({ authorId }, _args, { dataSources }) =>
      dataSources.trackAPI.getAuthor(authorId),
  },
};

module.exports = resolvers;
