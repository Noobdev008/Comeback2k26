const express = require('express');
const app= express();
const PORT = 3000;

app.use(express.json());
const jsonData = require('./data.json');

app.get('/users',(req,res)=>{
    let {page,limit,search} = req.query;
    const searchUser= search.toLowerCase();

    const startIndex = (page-1)*limit;
    const endIndex=startIndex+limit;

    //serach via name only 
    const userFind = searchUser ? jsonData.filter(user=>user.name.toLowerCase().includes(searchUser)) : false
    const paginatedUser= jsonData.slice(startIndex,endIndex);

    if(userFind){
        res.json({
            message:"Success",
            user:paginatedUser,
            filterName:userFind
        })
    }else{
        res.json({
            message:"Success",
            user:paginatedUser
        })
    }

});

app.listen(PORT,()=>{
    console.log(`Server runs on ${PORT}`);
    
})