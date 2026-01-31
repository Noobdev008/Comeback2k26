const express = require("express");
const router = express.Router();
const {addUser,findOne,findAll,updateUser,deleteUser, searchUser} = require("../controller/user.controller");
const {loginUser,registerUser}= require('../controller/signUp.controller')
const { createSchema, updateSchema, signUpSchema, signinSchema } = require("../auth/joi");
const { validateUser } = require("../middleware/validate");
const {auth}= require('../middleware/auth.token')


//post api
router.post("/add",auth,validateUser(createSchema), addUser);
router.post("/findOne", findOne);
router.post("/signup",validateUser(signUpSchema),registerUser);
router.post('/signin',validateUser(signinSchema),loginUser);

//get api
router.get("/find",auth, findAll);

//update api
router.post("/update/:id",auth,validateUser(updateSchema), updateUser);

// delete api
router.delete("/delete/:id",auth, deleteUser);

// serach and pagnation api
router.get("/user",auth, searchUser);




module.exports = router;
