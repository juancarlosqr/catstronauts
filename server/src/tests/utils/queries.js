const { gql } = require('apollo-server');

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

module.exports.GET_LAUNCHES = GET_LAUNCHES;
module.exports.GET_LAUNCHES_AUTHOR = GET_LAUNCHES_AUTHOR;
