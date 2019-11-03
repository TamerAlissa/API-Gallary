let http = require('http');
let fun = require('./server');
let server = http.createServer(fun);
server.listen(3000 , '127.0.0.4' , ()=>{
    console.log('Tamer')
})