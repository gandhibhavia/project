const e=require('express');
const path=require('path');
const app=e();
const publicpath=path.join(__dirname,'public');

app.use(e.static(publicpath));

app.listen(4800);