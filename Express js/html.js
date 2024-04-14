const d=require('express');
const app=express();

app.get("",(req,res)=>{
    response.send("<h1>Hiii, lets start the class</h1>");
});

app.get("/about",(req,res)=>{
    res.send(`
    <input type="text" placeholder="User name"/>`
     );
})
app.listen(4400);