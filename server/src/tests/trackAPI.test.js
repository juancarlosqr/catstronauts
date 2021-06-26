const createServer = require('./utils/createServer');
const {
  GET_LAUNCHES,
  GET_LAUNCHES_AUTHOR,
  GET_LAUNCHES_MODULES,
  GET_TRACK,
} = require('./utils/queries');

describe('trackAPI DataSource', () => {
  let server;

  beforeEach(async () => {
    server = createServer();
  });

  it('fetches tracks', async () => {
    // run operation and snapshot the output
    const res = await server.executeOperation({ query: GET_LAUNCHES });
    expect(res).toMatchSnapshot();
  });

  it('fetches tracks with author', async () => {
    // run operation and snapshot the output
    const res = await server.executeOperation({ query: GET_LAUNCHES_AUTHOR });
    expect(res).toMatchSnapshot();
  });

  it('fetches tracks with modules', async () => {
    // run operation and snapshot the output
    const res = await server.executeOperation({ query: GET_LAUNCHES_MODULES });
    expect(res).toMatchSnapshot();
  });

  it('fetches single track', async () => {
    // run operation and snapshot the output
    const res = await server.executeOperation({
      query: GET_TRACK,
      variables: { trackId: 'any' }, // not sure how to pass right trackId
    });
    expect(res).toMatchSnapshot();
  });
});
