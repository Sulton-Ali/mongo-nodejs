const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb+srv://aliadmin:382PjTo0TQx1Qjex@cluster0.bcfpg.mongodb.net/mongo?retryWrites=true&w=majority');


class UserController {
  async createUser(req, res) {
    await client.connect();
    console.log('connection success');
    const users = client.db().collection("users");
    const { name, age } = req.body;
    console.log(name, age);
    await users.insertOne({
      name,
      age
    });
    res.json("ok");
  }

  async getUsers(req, res) {

  }

  async getOneUser(req, res) {

  }

  async updateUser(req, res) {

  }

  async deleteUser(req, res) {

  }
}

module.exports = new UserController();
