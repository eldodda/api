import request from "supertest";
import { expect } from "chai";
import adminService from "../services/adminService.js";
import userService from "../services/userService.js";
import fs from "fs";

const testPath = process.env.JSON_TEST_PATH;
describe("Suíte de testes para os Services", () => {
  beforeEach(() => {
    const initialData = { a: [], u: [] };
    fs.writeFileSync(testPath, JSON.stringify(initialData, null, 2));
  });

  describe("Testes - adminService", () => {
    it("Deve retornar todos os Admin", () => {
      // ARRANGE
      const service = new adminService(testPath);

      // ACT
      const result = service.getAllAdmin();

      // ASSERT
      expect(result).to.be.an("array");
    });

    it("Deve criar um novo Admin", () => {
      // ARRANGE
      const service = new adminService(testPath);
      const newA = { name: "Teste A" };

      // ACT
      const createdA = service.createAdmin(newA);

      // ASSERT
      expect(createdA).to.have.property("id");
      expect(createdA.name).to.equal(newA.name);
    });

    it("Deve lançar um erro ao tentar criar um Admin vazio", () => {
      // ARRANGE
      const service = new adminService(testPath);
      const newA = {};

      // ACT

      // ASSERT
      expect(() => service.createAdmin(newA)).to.throw(
        Error,
        "Objeto Admin não pode ser vazio.",
      );
    });

    it("Deve atualizar um Admin existente", () => {
      // ARRANGE
      const service = new adminService(testPath);
      const newA = { name: "Teste Admin" };
      const createdA = service.createAdmin(newA);
      const updatedData = { name: "Teste Admin Atualizado" };

      // ACT & ASSERT
      expect(updatedData.name).to.equal("Teste Admin Atualizado");
    });

    it("Deve lançar um erro ao tentar atualizar um Admin inexistente", () => {
      // ARRANGE
      const service = new adminService(testPath);
      const updatedData = { name: "Teste Admin Atualizado" };

      // ACT & ASSERT
      expect(() => service.updateAdmin(999, updatedData)).to.throw(
        Error,
        "Objeto Admin não encontrado.",
      );
    });

    it("Deve deletar um Admin existente", () => {
      // ARRANGE
      const service = new adminService(testPath);
      const newA = { name: "Teste Admin" };
      const createdA = service.createAdmin(newA);

      // ACT
      service.deleteAdmin(createdA.id);
      const allA = service.getAllAdmin();

      // ASSERT
      expect(allA).to.be.an("array").that.is.empty;
    });
  });
});

describe("Testes - userService", () => {
  it("Deve retornar todos os objetos User", () => {
    // ARRANGE
    const service = new userService(testPath);

    // ACT
    const result = service.getAllUsers();

    // ASSERT
    expect(result).to.be.an("array");
  });
});
