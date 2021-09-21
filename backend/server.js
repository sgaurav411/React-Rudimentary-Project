const products = {
    products:
    [
        {
            id: '1234',
            title:'Sunglasses',
            price: 1000,
            quantityAvailable: 10,
            imgLink: 'https://media.istockphoto.com/photos/croatian-beach-mirroring-in-sunglasses-on-towel-picture-id1278067767?b=1&k=20&m=1278067767&s=170667a&w=0&h=CGCBCIQDyuagQaiyO0LanJk-JL4Wl0_akEjonhL3ArQ='
          },
          {
            id: '1235',
            title:'Bat',
            price: 5000,
            quantityAvailable: 2,
            'imgLink':'https://media.istockphoto.com/photos/wooden-cricket-bat-and-ball-on-a-white-background-picture-id505125296?b=1&k=20&m=505125296&s=170667a&w=0&h=Mx0p1MeuSpsI3N-9So_FMT7xpjug61NuwXca3_uVv9g='
          }
    ]
};

console.log(products);

const express = require('express');

const app=express();

app.get('',(req,res)=>{
    res.send('Hi there, Hello there');
});

app.get('/another',(req,res)=>{
    res.send('On another page');
});

app.get('/getProducts',(req,res)=>{
    res.send(JSON.stringify(products));
});

app.listen(3001,()=>{
    console.log('SERVER UP AND RUNNING AT PORT 3001');
});



