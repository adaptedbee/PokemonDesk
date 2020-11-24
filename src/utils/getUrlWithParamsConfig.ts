import config from '../config';

function getUrlWithParamsConfig(endpointConfig: string, query: any) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
    query: {},
  };

  const editedQuery = { ...query };
  const pathname = Object.keys(editedQuery).reduce((acc, val) => {
    if (acc.indexOf(`{${val}}`) !== -1) {
      const result = acc.replace(`{${val}}`, editedQuery[val]);
      delete editedQuery[val];
      return result;
    }
    return acc;
  }, url.pathname);

  url.pathname = pathname;
  url.query = {
    ...editedQuery,
  };

  return url;
}

export default getUrlWithParamsConfig;
