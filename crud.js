///Crud operations on file

const fs=require('fs');
const path=require('path')
const dirPath=path.join(__dirname,'Crud');
const filePath=`${dirPath}/apple.txt`;

fs.writeFileSync(filePath,'This is a simple')

fs.readFile(filePath,'utf8',(err,item)=>{
console.log(item);
})

fs.appendFile(filePath,' vikas',(err)=>{
if(!err) console.log("file is updated")
})

fs.rename(filePath, `${dirPath}/fruit.txt`,(err)=>{
if(!err) console.log("file name is updated")
})

fs.unlinkSync(`${dirPath}/fruit.txt`);