import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Layout, QueryResult } from '../components';
import TrackCard from '../containers/track-card';

export const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        name
        photo
      }
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  return (
    <Layout grid>
      <QueryResult loading={loading} error={error} data={data}>
        {data?.tracksForHome?.map((track) => (
          <TrackCard track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
