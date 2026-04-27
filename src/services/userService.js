import fs from "fs";
import "dotenv/config";

export default class userService {
  constructor(jsonPath) {
    this.jsonPath = jsonPath || process.env.JSON_PATH;
  }
  getAllUsers() {
    const data = fs.readFileSync(this.jsonPath, "utf8");
    const db = JSON.parse(data);
    return db.u;
  }

  createUser(newU) {
    if (!newU || Object.keys(newU).length === 0)
      throw new Error("Objeto User não pode ser vazio.");

    const data = fs.readFileSync(this.jsonPath, "utf8");
    const db = JSON.parse(data);
    const newId = db.u.length > 0 ? db.u[db.u.length - 1].id + 1 : 1;

    const createdU = { id: newId, ...newU };
    db.u.push(createdU);
    fs.writeFileSync(this.jsonPath, JSON.stringify(db, null, 2));
    return createdU;
  }

  updateUser(uId, updatedUData) {
    const data = fs.readFileSync(this.jsonPath, "utf8");
    const db = JSON.parse(data);
    const uIndex = db.u.findIndex((u) => u.id === parseInt(uId));

    if (uIndex === -1 || !db.u[uIndex])
      throw new Error("Objeto User não encontrado.");
    if (!updatedUData)
      throw new Error("Dados para atualização não podem ser vazios.");

    db.u[uIndex] = { id: parseInt(uId), ...updatedUData };
    fs.writeFileSync(this.jsonPath, JSON.stringify(db, null, 2));
    return db.u[uIndex];
  }

  deleteUser(uId) {
    const data = fs.readFileSync(this.jsonPath, "utf8");
    const db = JSON.parse(data);
    const uIndex = db.u.findIndex((u) => u.id === parseInt(uId));
    if (uIndex === -1 || !db.u[uIndex]) {
      throw new Error("Objeto User não encontrado.");
    }
    db.u.splice(uIndex, 1);
    fs.writeFileSync(this.jsonPath, JSON.stringify(db, null, 2));
  }
}
