const { gql } = require('apollo-server');

const GET_LAUNCHES = gql`
  query getTracks {
    tracksForHome {
      id
      title
      length
      thumbnail
      modulesCount
      description
      numberOfViews
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

const GET_LAUNCHES_MODULES = gql`
  query getTracksWithModules {
    tracksForHome {
      id
      title
      modules {
        id
        title
        length
      }
    }
  }
`;

const GET_TRACK = gql`
  query getTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      thumbnail
      length
      modulesCount
      description
      numberOfViews
      author {
        id
        name
        photo
      }
      modules {
        id
        title
        length
      }
    }
  }
`;

module.exports.GET_LAUNCHES = GET_LAUNCHES;
module.exports.GET_LAUNCHES_AUTHOR = GET_LAUNCHES_AUTHOR;
module.exports.GET_LAUNCHES_MODULES = GET_LAUNCHES_MODULES;
module.exports.GET_TRACK = GET_TRACK;
