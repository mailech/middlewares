// let data = (req,res,next)=>{
//     // console.log('Inside Middleware function '+req.query.name);
//     // console.log('Inside Middleware function '+req.query.dept);
//     // res.locals.name = req.query.name.toUpperCase();
//     // res.locals.dept = req.query.dept.toUpperCase();
//     // res.locals.dept = req.query.dept.split('').reverse().join('');
//     console.log(Date.now());
    
//     next();
    
// }

let data = (req,res,next)=>{
    console.log(req.body);
    console.log(req.body);
    res.locals.name = req.body.name.toLowerCase();
    res.locals.dept = req.body.dept.toLowerCase();
    next();
    
}

let d = function(req,res,next){
    next();
}


//Two types of Exports
    // 1. Default Export
    // export default data;
    // 2. Named Export
module.exports = {data,d};
