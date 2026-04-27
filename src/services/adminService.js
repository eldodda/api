import fs from "fs";
import "dotenv/config";

export default class adminService {
  constructor(jsonPath) {
    this.jsonPath = jsonPath || process.env.JSON_PATH;
  }
  getAllAdmin() {
    const data = fs.readFileSync(this.jsonPath, "utf8");
    const db = JSON.parse(data);
    return db.a;
  }

  createAdmin(newA) {
    if (!newA || Object.keys(newA).length === 0)
      throw new Error("Objeto Admin não pode ser vazio.");

    const data = fs.readFileSync(this.jsonPath, "utf8");
    const db = JSON.parse(data);
    const newId = db.a.length > 0 ? db.a[db.a.length - 1].id + 1 : 1;

    const createdA = { id: newId, ...newA };
    db.a.push(createdA);
    fs.writeFileSync(this.jsonPath, JSON.stringify(db, null, 2));
    return createdA;
  }

  updateAdmin(aId, updatedAData) {
    const data = fs.readFileSync(this.jsonPath, "utf8");
    const db = JSON.parse(data);
    const aIndex = db.a.findIndex((a) => a.id === parseInt(aId));

    if (aIndex === -1 || !db.a[aIndex])
      throw new Error("Objeto Admin não encontrado.");
    if (!updatedAData)
      throw new Error("Dados para atualização não podem ser vazios.");

    db.a[aIndex] = { id: parseInt(aId), ...updatedAData };
    fs.writeFileSync(this.jsonPath, JSON.stringify(db, null, 2));
    return db.a[aIndex];
  }

  deleteAdmin(aId) {
    const data = fs.readFileSync(this.jsonPath, "utf8");
    const db = JSON.parse(data);
    const aIndex = db.a.findIndex((a) => a.id === parseInt(aId));
    if (aIndex === -1 || !db.a[aIndex]) {
      throw new Error("Objeto Admin não encontrado.");
    }
    db.a.splice(aIndex, 1);
    fs.writeFileSync(this.jsonPath, JSON.stringify(db, null, 2));
  }
}
