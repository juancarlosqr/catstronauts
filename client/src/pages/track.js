import React, { useEffect } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { Layout, QueryResult } from '../components';
import TrackDetail from '../components/track-detail';

const GET_TRACK = gql`
  query getTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      thumbnail
      durationInSeconds
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
        durationInSeconds
      }
    }
  }
`;

const INCREMENT_TRACK_VIEWS = gql`
  mutation Mutation($incrementTrackViewsId: ID!) {
    incrementTrackViews(id: $incrementTrackViewsId) {
      code
      message
      success
      track {
        id
        numberOfViews
      }
    }
  }
`;

const Track = ({ trackId }) => {
  const { loading, error, data } = useQuery(GET_TRACK, {
    variables: {
      trackId,
    },
  });

  const [incrementViews] = useMutation(INCREMENT_TRACK_VIEWS, {
    variables: {
      incrementTrackViewsId: trackId,
    },
    onCompleted: (data) => {
      console.log(data.incrementTrackViews);
    },
  });

  useEffect(() => {
    incrementViews();
  }, [incrementViews]);

  return (
    <Layout>
      <QueryResult loading={loading} error={error} data={data}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
};

export default Track;
