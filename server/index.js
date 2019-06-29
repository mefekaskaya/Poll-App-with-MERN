require('dotenv').config();
const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');

const handle=require('./handlers');
const routes=require('./routes');

const app=express();
const port=process.env.PORT;

app.use(cors()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth',routes.auth);
app.use('/api/polls',routes.poll);

app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

app.use(handle.notFound);
app.use(handle.errors);
 
app.listen(port,console.log(`Server started on port ${port}`));