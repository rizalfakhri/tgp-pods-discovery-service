const { DataSource } = require('apollo-datasource');
import models, { db } from '../db';

class PodsAPI extends DataSource {

  constructor() {
    super()
  }

  async getPodById(id) {

    let pod = await models.Pod.find({ id: id }).exec()

    return pod

  }

  async getRawData() {
    let pods = await models.Pod.find({})

    return pods
  }

}

module.exports = PodsAPI;

