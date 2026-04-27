import userService from "../services/userService.js";

const userServiceI = new userService();

export default class userController {
  async userGet(req, res) {
    const userList = await userServiceI.getAllUsers();
    res.status(200).json(userList);
    console.log("userGet successful");
  }

  async userPost(req, res) {
    const newUser = req.body;
    const createdUser = await userServiceI.createUser(newUser);
    res.status(201).json(createdUser);
    console.log("userPost successful");
  }

  async userPut(req, res) {
    const userId = req.params.id;
    const updatedUserData = req.body;
    const updatedUser = await userServiceI.updateUser(userId, updatedUserData);
    res.status(200).json(updatedUser);
    console.log("userPut successful");
  }

  async userDelete(req, res) {
    const userId = req.params.id;
    await userServiceI.deleteUser(userId);
    res.status(204).send({ message: "User deleted successfully" });
    console.log(`userDelete successful`);
  }
}
