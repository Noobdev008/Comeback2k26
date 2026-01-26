const data = require('../data.json');

const findUserEmail = (email)=>{
    return data.find(u=>(u.email).toLowerCase()===email.toLowerCase());
}

module.exports= {findUserEmail}