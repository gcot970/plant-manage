const db = require('../config/connection');
const { Profile } = require('../models');
const userSeeds = require('./user-seeds.json');

db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(userSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});