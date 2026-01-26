const logger  = (req,res,next)=>{
    console.log(req.method, req.url);
    console.log(new Date().toISOString());
    
    next();
}  

module.exports = logger