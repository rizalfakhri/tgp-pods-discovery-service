require('dotenv').config()

import mongoose from 'mongoose';

import Pod from './models/Pod';

const DATABASE_URL = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`

const db = () => {
  console.log(DATABASE_URL)
  return mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

const models = { Pod };

/*
 * For testing purposes only, seed base pods.
 */


const createPods =  () => {

  const pods = [
    {
      id: 1,
      name: 'The Gym Pod @ Alexandra TechnoPark',
      address: '438a Alexandra Rd, Singapore 119967',
      url: 'https://www.thegympod.com/alexandra-technopark/'
    },
    {
      id: 2,
      name: 'The Gym Pod @ Bishan-Ang Mo Kio Park',
      address: 'Ang Mo Kio Ave 1',
      url: 'https://www.thegympod.com/bishan-angmokio-park/'
    },
    {
      id: 3,
      name: 'The Gym Pod @ Changi City Point',
      address: '5 Changi Business Park Central 1, Singapore 486038',
      url: 'https://www.thegympod.com/changi-city-point/'
    },
    {
      id: 4,
      name: 'The Gym Pod @ Icon IBP',
      address: '3a International Business Park Road, Singapore 609935',
      url: 'https://www.thegympod.com/international-business-park/'
    },
    {
      id: 5,
      name: 'The Gym Pod @ JTC LaunchPad - Ayer Rajar Crescent',
      address: '73a Ayer Rajah Crescent Singapore 139957',
      url: 'https://www.thegympod.com/jtclaunchpad/'
    },
    {
      id: 6,
      name: 'The Gym Pod @ Punggol Park',
      address: 'Hougang Avenue 10 Singapore 538768',
      url: 'https://www.thegympod.com/punggol-park/'
    },
    {
      id: 7,
      name: 'The Gym Pod @ Techplace 1',
      address: '4009 Ang Mo Kio Ave 10 Singapore 569625',
      url: 'https://www.thegympod.com/techplace1/'
    },
    {
      id: 8,
      name: 'The Spin Pod @ Changi City Point',
      address: '5 Changi Business Park Central 1 Singapore 486038',
      url: 'https://www.thegympod.com/spin-ccp/'
    },
  ]

  Pod.insertMany(pods).then(() => {
    console.log('Pods created')
  })


};

export { db, createPods };

export default models;

