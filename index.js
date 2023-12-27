// const http =  require('http')
// const data= require('./data')
// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'Content-Type':'application\json'});
//     resp.write(JSON.stringify(data)
// )
//     resp.end();
// }).listen(4500);

const file= require('fs')
const input=process.argv

if (input[2]=='add'){
    file.writeFileSync(input[3],input[4])
}
else if (input[2]=='delete')
{
    file.unlinkSync(input[3])
}
else{
    console.log("Error")
}

