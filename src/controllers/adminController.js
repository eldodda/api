import adminService from "../services/adminService.js";

const adminServiceI = new adminService();

export default class adminController {
  async adminGet(req, res) {
    const adminList = await adminServiceI.getAllAdmin();
    res.status(200).json(adminList);
    console.log("adminGet successful");
  }

  async adminPost(req, res) {
    const newAdmin = req.body;
    const createdAdmin = await adminServiceI.createAdmin(newAdmin);
    res.status(201).json(createdAdmin);
    console.log(`adminPost successful`);
  }

  async adminPut(req, res) {
    const adminId = req.params.id;
    const updatedAdminData = req.body;
    const updatedAdmin = await adminServiceI.updateAdmin(
      adminId,
      updatedAdminData,
    );
    res.status(200).json(updatedAdmin);
    console.log("adminPut successful");
  }

  async adminDelete(req, res) {
    const adminId = req.params.id;
    await adminServiceI.deleteAdmin(adminId);
    res.status(204).json({ message: "Admin deleted successfully" });
    console.log(`adminDelete successful`);
  }
}
