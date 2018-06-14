const express = require('express');
const jsonParser = require('body-parser').json();
const app = express();
//apply

app.use((req, res, next )=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Content-Type,X-Requested-Width');
    next();
});
//loadfile
const fs = require('fs');

var producSALE = fs.readFileSync('p_sale.json');
var producFresh = fs.readFileSync('p_fresh.json');
var producSpecial = fs.readFileSync('p_special.json');
var producThankfull = fs.readFileSync('p_thank.json');
var producBox = fs.readFileSync('p_box.json');
var producAll = fs.readFileSync('p_all.json');
var sale = fs.readFileSync('sale.json');



var data_sale = JSON.parse(producSALE);
var data_fresh = JSON.parse(producFresh);
var data_special = JSON.parse(producSpecial);
var data_thank = JSON.parse(producThankfull);
var data_box = JSON.parse(producBox);
var data_all = JSON.parse(producAll);
var data_saleconst = JSON.parse(sale);
//SEND
app.get('/getsale',(req, res)=>{
        res.send(JSON.stringify(data_sale));
});
app.get('/getfresh',(req, res)=>{
    res.send(JSON.stringify(data_fresh));
});
app.get('/getspecial',(req, res)=>{
    res.send(JSON.stringify(data_special));
});
app.get('/getthank',(req, res)=>{
    res.send(JSON.stringify(data_thank));
});
app.get('/getbox',(req, res)=>{
    res.send(JSON.stringify(data_box));
});
app.get('/getall',(req, res)=>{
    res.send(JSON.stringify(data_all));
});
app.get('/getconstsale',(req, res)=>{
    res.send(JSON.stringify(data_saleconst));
});



app.get('/home', (req, res) => {
    res.send('MÁY CHỦ ĐANG CHẠY AHIHI');
});

//post
    app.post('/post1',jsonParser, (req, res) =>{
        console.log(req.body);
        fs.writeFileSync("./Email/email_" + req.body.name+".txt", "Email: " + req.body.email +" , Name :" + req.body.name, function (err) {
            if (err) 
            throw err;
            console.log('Done!');
          });
    });

     app.post('/post2',jsonParser, (req, res) =>{
        console.log(req.body);
        fs.writeFileSync("./DDH/ddh_" + req.body.name+".txt", 
        "ddh: Name: " + req.body.name
        +", Email :" + req.body.email
        + ", Phone:" + req.body.phone
        +", Address:" + req.body.address
        +", product:" + req.body.product,
         function (err) {
            if (err) 
            throw err;
            console.log('Done!');
          });
    });

app.listen(3000, ()=>console.log('server is running'));