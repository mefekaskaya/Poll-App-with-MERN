require('dotenv').config();
const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');

const handle=require('./handlers/index');

const app=express();
const port=process.env.PORT;

app.get('/',(req,res)=>res.json({hello:"world"}));

app.use(cors());
app.use(bodyParser.json());

app.use(handle.notFound);

app.use(handle.errors);

app.listen(port,console.log('Server started on port ${port}'));