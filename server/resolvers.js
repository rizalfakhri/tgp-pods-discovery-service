
const PodsAPI = new require('./data/pods')

const api = new PodsAPI

module.exports = {
  Query: {
      pods: () => api.getRawData(),
      pod: (_, { id }, { dataSources }) => api.getPodById(id),
    }
}
