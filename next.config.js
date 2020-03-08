const path = require('path');

module.exports = {
  webpack: config => {
    config.resolve.modules.push(path.resolve('./src'));

    return config;
  },
  env: {
    baseUrl: 'https://super-github-consumer-api.herokuapp.com/',
  },
};
