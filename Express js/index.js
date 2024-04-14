const e = require('express');
const app = e();
const path = require('path');
const publicpath = path.join(__dirname, 'public');

// app.get('',(req,resp)=>{
//     resp.send("Welcome TO My store");
//     console.log(req.query.nm)
// });

// app.get('/about',(req,resp)=>{

//     resp.send("Welcome to Ics class");
//     console.log(req.query.info)

// });
app.set('view engine', 'ejs');

app.get('', (_, resp) => {
    resp.sendFile(`${publicpath}/about.html`);

});

app.get('/profile', (_, resp) => {

    resp.render("Welcome to Ics class");


});


app.listen(4500);
