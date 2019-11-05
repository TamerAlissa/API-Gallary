let expres = require('express');
let ta = expres();
let url = require("fs")
let port = 4000

let tar;
url.readFile('./URL.txt' , 'utf8' , (error , data)=>{
    if(error) {
        console.log("errrreeerrrr")
    }else{
       tar = data.split("\n")
    }
})








let pageSize=20;
ta.get('/photos/:page/' , (req , res)=>{
    res.append('Access-Control-Allow-Origin', '*');
    res.append('Access-Control-Allow-Headers', '*');
    let page = req.url.split('/')[2]
    let start = (page-1)*pageSize;
    let end = start + pageSize;
    res.send({
       photos : tar.slice(start,end)
    });
});
ta.listen(port , ()=>{
    console.log("tamer run .......")
});
