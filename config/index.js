const raven = {
  dsn: process.env.RAVEN_DSN
};

const testMode = false;

const getHostAndScheme = () => {
  const host = process.env.API_HOST;
  const scheme = 'https://';

  return {
    host,
    scheme
  };
};

const api = {
  routes: {
    actions: {
      fetchHighlights: {
        method: 'get',
        route: '/api/twitter/highlights',
        params: {
          pageSize: Number,
          pageIndex: Number
        }
      }
    }
  }
};

const getApi = environmentProvider => {
  api.host = getHostAndScheme(environmentProvider).host;
  api.scheme = getHostAndScheme(environmentProvider).scheme;

  return api;
};
const getRoutes = () => api.routes;
const getSchemeAndHost = () => `${api.scheme}${api.host}`;

localStorage.setItem('x-auth-token', process.env.API_AUTH_TOKEN);

export default {
  getApi,
  getRoutes,
  getSchemeAndHost,
  raven,
  testMode
};
