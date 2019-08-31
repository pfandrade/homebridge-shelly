const express = require('express')
const path = require('path')

const api = require('./api')

class AdminServer {
  constructor(platform, config) {
    this.platform = platform
    this.config = config

    this.app = express()
    this.app.use('/api', api(platform, config))
    this.app.use('/', express.static(path.join(__dirname, 'static')))
  }

  listen() {
    return new Promise((resolve, reject) => {
      const server = this.app.listen(this.config.port || 8080, () => {
        resolve(server.address().port)
      })
    })
  }
}

module.exports = AdminServer
