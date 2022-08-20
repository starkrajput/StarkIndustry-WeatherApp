const express = require("express");
const path = require('path');
const app = express();
const hbs = require("hbs");
// if available use PORT otherwise use 8800.
const port = process.env.PORT || 8800;
//const port = 8800;



// hbs work.
const template_path  = path.join(__dirname,"../templates/views");
app.set('view engine','hbs');
app.set('views',template_path);
// partials register
const partials_path  = path.join(__dirname,"../templates/partials");
hbs.registerPartials(partials_path);






//console.log(path.join(__dirname,"../public"));
const static_path  = path.join(__dirname,"../public");
// here top to bottum approach is used.s
app.use(express.static(static_path));














// routing.
app.get("",(req,res)=>{
  //res.send("Welcome to Stark industry.")
  res.render("index")
});

app.get("/about",(req,res)=>{
   res.render("about")
});

app.get("/weather",(req,res)=>{
    res.render("Weather")
  });

app.get("*",(req,res)=>{
    res.render("404error",{
      errMsg :'OOps! Page not found.'
    })
});

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});
