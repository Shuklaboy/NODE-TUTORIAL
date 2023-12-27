///Crud operations on file

const fs=require('fs');
const path=require('path')
const dirPath=path.join(__dirname,'Crud');
const filePath=`${dirPath}/apple.txt`;

// fs.writeFileSync(filePath,'This is a simple')

fs.readFile(filePath,())