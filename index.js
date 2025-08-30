const express = require('express');
const { data, d } = require('./middlewares/mymiddleware');
const app = express()


app.use(express.json());
// app.use(data);
app.listen(3000, () => {
    // console.log('/\\','/\\','/\\','/\\');
    console.log("Server is running on port 3000");
});

// app.get('/students',data,function(req,res,next){
//     next();
// },(req,res)=>{
//       res.json({
//         name:req.query.name,
//         deptt:req.query.dept,
//         msg:`Hello ${res.locals.name}`,
//         dept:`${res.locals.dept}`
//     });
//     console.log('Inside CBFN '+res.locals.name);
//     console.log('Inside CBFN '+ res.locals.dept);

// });

app.post('/students',data,(req,res)=>{
      res.json({
        'name':res.locals.name,
        'dept':res.locals.dept,
        'msg':"HIII"
    });
    console.log(res.locals.name);
    console.log(res.locals.dept);

});


app.get('/middleconcat',d,(req,res)=>{
    res.json({
    'msg':`Hello ${req.locals.fulldetail}`
});


});






