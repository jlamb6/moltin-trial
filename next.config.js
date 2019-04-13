module.exports = {
    webpack: config => {
      config.node = {
        fs: 'empty'
      }
      config.module.rules.push({
        loaders: { loader: 'style-loader!css-loader' }
      })
      return config
    }
  }