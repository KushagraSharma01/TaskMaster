const mongoose = require('mongoose');
const Event = require('./Model/Event');

async function add(){

try{
    await Event.insertMany([

        {
            name : "GYM",
            description : "yes let's do gym"
        },
        {
            name : "Swimming",
            description : "yes let's do Swimming"
        },
        {
            name : "Study",
            description : "yes let's do Study"
        },
        {
            name : "Food",
            description : "yes let's eat Food"
        }

]);
console.log("data seeded");
}
catch(err){
    console.log(err);
}



}




module.exports = add;