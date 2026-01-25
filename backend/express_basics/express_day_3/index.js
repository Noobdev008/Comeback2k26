const express = require('express');
const PORT = 3000;
const app = express();
app.use(express.json());

const jasonData = require('./data.json');


app.get("/user", (req, res) => {
  let { isActive, order } = req.query;

  // 1️⃣ start with full data
  let users = [...jasonData];

  // 2️⃣ filter
  if (isActive === "false") {
    return res.json({
      message: "Users are hidden"
    });
  }

  if (isActive === "true") {
    users = users.filter(u => u.isActive === true);
  }

  // 3️⃣ sort
  if (order === "asc") {
    users.sort((a, b) => a.age - b.age);
  }

  if (order === "desc") {
    users.sort((a, b) => b.age - a.age);
  }

  // 4️⃣ respond
  res.json({
    message: "Users found",
    users
  });
});

app.get('/user/:id',(req,res)=>{
    let paramsId = +(req.params.id)
    const product = jasonData.find(p=>p.id===paramsId);
    if(product){
        res.json({
           message:"User Found",
           user:product
       })
    }else{
          res.json({
           message:"User not found",
       })
    }
});

app.listen(PORT,()=>{
    console.log(`Server runs on ${PORT}`);
    
});
