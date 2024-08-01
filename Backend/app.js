const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRoutes = require('./Routes/AuthRoutes');
const UserRoutes = require('./Routes/UserRoutes');
const seed = require('./seed');


mongoose.connect('mongodb://127.0.0.1:27017/TaskMaster')
.then(()=>{
    console.log("connected to database");
})
.catch((e)=>{
    console.log(e);
})

// seed();

app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(AuthRoutes);
app.use(UserRoutes);





app.listen(8080, ()=>{

    console.log("connected at port 8080");

})