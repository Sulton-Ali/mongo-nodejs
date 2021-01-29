const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb+srv://aliadmin:382PjTo0TQx1Qjex@cluster0.bcfpg.mongodb.net/mongo?retryWrites=true&w=majority');


const startDb = async () => {
  try {
    await client.connect();
    console.log(client);
    console.log('Connection success!');
  } catch (e) {
    console.log(e);
  }
 return client;
};

module.exports = startDb();
