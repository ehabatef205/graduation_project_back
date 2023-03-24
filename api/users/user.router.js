const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createUser,
  login,
  getUserByUserId,
  getUsers,
  updateUsers,
  deleteUser,
  excelcreate,
  fromexcelcreate
} = require("./user.controller");
router.get("/", checkToken, getUsers);
router.post("/", checkToken, createUser);
router.get("/:id", checkToken, getUserByUserId);
router.post("/login", login);
router.patch("/", checkToken, updateUsers);
router.delete("/", checkToken, deleteUser);
router.post("/excelcreate",checkToken,excelcreate)
router.post("/fromexcelcreate",checkToken,fromexcelcreate)

module.exports = router;
