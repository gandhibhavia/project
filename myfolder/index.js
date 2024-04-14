const fs=require('fs');
const path=require('path');
const dirpath=path.join(__dirname,'crud');
const filepath='apple.txt';

//fs.writeFileSync(filepath,'this is a simple text file');

//read file

// fs.readFile(filepath,'utf8',(err,item)=>{
//     console.log(item)

// })

// fs.appendFile(filepath,'and file name is apple.txt',(err)=>{
//     if(err)console.log('file is updated')
// });

//*rename

// fs.rename(filepath,'fruit.txt',(err)=>{
//      if(err) console.log('file is updated')
// })

//*delete file

fs.unlinkSync('fruit.txt')