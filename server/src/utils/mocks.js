const casual = require('casual');

casual.seed(4242);

const authorId = casual.uuid;

const mockTracksResponse = [
  {
    id: casual.uuid,
    title: casual.sentence,
    authorId: authorId,
    thumbnail: casual.url,
    length: casual.integer(1, 12),
    modulesCount: casual.integer(1, 5),
  },
  {
    id: casual.uuid,
    title: casual.sentence,
    authorId: authorId,
    thumbnail: casual.url,
    length: casual.integer(1, 12),
    modulesCount: casual.integer(1, 5),
  },
];

const mockAuthorResponse = {
  id: authorId,
  name: casual.name,
  photo: casual.url,
};

module.exports = {
  mockAuthorResponse,
  mockTracksResponse,
};
