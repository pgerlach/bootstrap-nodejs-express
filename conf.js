var conf = {
  server : {
    host: 'localhost',
    port: 4242
  }
};

// for heroku
if ('PORT' in process.env) {
  conf.server.port = process.env.PORT;
}


if ('SERVER_HOST' in process.env) {
  conf.server.host = process.env.SERVER_HOST;
}


module.exports = conf;
