const http =require('http');
http.createServer((req,resp)=>{
    //resp.write("hello bhavika");
    resp.write("<h1>hello bhavika</h1>");
    resolve.end();
}).listen(4500);

// http.createServer()

function total(a)
{
    return a*10;
}
//arrow function
const total=(a)=>a*100