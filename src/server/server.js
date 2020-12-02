const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  server.route({
    method: 'GET',
    path: '/{any*}',
    handler: (request) => {
      return `Hello World! This is ${request.path}`;
    },
  });

  await server.start();
  // console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', () => {
  // console.log(err);
  process.exit(1);
});

init();