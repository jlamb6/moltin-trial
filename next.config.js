require('dotenv').config();

module.exports = {
  webpack: config => {
    config.node = {
      fs: 'empty'
    }
    return config
  },
  env: {
    clientId: process.env.CLIENT_ID
  }
}
