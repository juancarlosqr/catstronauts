const casual = require('casual');

casual.seed(4242);

const authorId = casual.uuid;

const mockTrackResponse = {
  id: casual.uuid,
  title: casual.sentence,
  authorId: authorId,
  thumbnail: casual.url,
  length: casual.integer(1, 12),
  modulesCount: casual.integer(1, 5),
  description: casual.sentence,
  numberOfViews: casual.integer(1, 10),
};

const mockTracksResponse = [
  {
    id: casual.uuid,
    title: casual.sentence,
    authorId: authorId,
    thumbnail: casual.url,
    length: casual.integer(1, 12),
    modulesCount: casual.integer(1, 5),
    description: casual.sentence,
    numberOfViews: casual.integer(10, 100),
  },
  mockTrackResponse,
];

const mockAuthorResponse = {
  id: authorId,
  name: casual.name,
  photo: casual.url,
};

const mockTrackModulesResponse = [
  {
    id: casual.uuid,
    title: casual.sentence,
    length: casual.integer(1, 10),
  },
  {
    id: casual.uuid,
    title: casual.sentence,
    length: casual.integer(1, 10),
  },
];

module.exports = {
  mockAuthorResponse,
  mockTrackModulesResponse,
  mockTracksResponse,
  mockTrackResponse,
};
