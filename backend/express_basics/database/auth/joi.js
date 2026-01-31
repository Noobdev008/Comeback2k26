const Joi = require('joi');

const signUpSchema= Joi.object({
    name:Joi.string().min(3).required(),
    email:Joi.string().email().required(),
    age:Joi.number().min(18).max(70).required(),
    password:Joi.string().min(6).max(20).required()
});

const signinSchema= Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().min(6).max(20).required()
});

const createSchema= Joi.object({
    name:Joi.string().min(3).required(),
    email:Joi.string().email().required(),
    age:Joi.number().min(18).max(70).required(),
    role:Joi.string().valid("user","admin"),
    isActive:Joi.boolean()
})

const updateSchema = Joi.object({
    name:Joi.string().min(3),
    email:Joi.string().email(),
    age:Joi.number().min(18).max(70).required(),
}).min(1);

module.exports= {createSchema,updateSchema,signUpSchema,signinSchema}