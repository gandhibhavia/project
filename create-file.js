const fp=require('fs');
// fp.writerFileSync("myfolder/abc.txt","hiii");
//fp.writeFileSync('myfolder/abc.txt','hie');

// fp.readFile('myfolder/abc.txt','utf8',(err,data)=>
// {
//     if (err) {
//         console.error(err);
//         return;
//       }
//       console.log(data);

// });

fp.appendFile('msg.txt','i am bhavika fairy','utf8',(e,nd)=>
{
    if(e)throw e
    {
        console.log('append function');
    }
  

});

fp.readFile('msg.txt',)