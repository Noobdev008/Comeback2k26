const express = require("express");
const router = express.Router();
const {addUser,findOne,findAll,updateUser,deleteUser, searchUser} = require("../controller/user.controller");
const { createSchema, updateSchema } = require("../auth/joi");
const { validateUser } = require("../middleware/validate");


//post api
router.post("/add",validateUser(createSchema), addUser);
router.post("/findOne", findOne);

//get api
router.get("/find", findAll);

//update api
router.post("/update/:id",validateUser(updateSchema), updateUser);

// delete api
router.delete("/delete/:id", deleteUser);

// serach and pagnation api
router.get("/user", searchUser);



module.exports = router;
