const config = require('./config.json')

module.exports = {
  getDBConnectionString: () => `mongodb+srv://${config.username}:${config.password}@appcluster.scc2e.mongodb.net/stickiesdb?retryWrites=true&w=majority`
}