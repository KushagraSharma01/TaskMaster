const express = require('express');
const router = express.Router();
const Event = require('../Model/Event');


router.get('/showEvents', async(req,res)=>{

    let event = await Event.find();

    res.send(event);

});



//add event
router.post('/addEvent', async(req, res)=>{

    let {name, des, id} = req.body;

    let newEvent = await Event.create({
        name : name,
        description : des,
        id : id,
        checked : false
    });


    console.log(newEvent);
    res.send("ok");
})


//delete event
router.post('/deleteEvent', async(req, res)=>{
    let {id} = req.body;
    console.log(id);

    await Event.deleteOne({id : id});
    res.send("ok");
})

//clear all events
router.post('/clearAll', async(req, res)=>{
    
    await Event.deleteMany();

    res.send("ok");
})

//check event
router.post('/checked', async(req, res)=>{
    
    let {id} = req.body;

    let foundevent = await Event.findOne({id : id});

    await Event.updateOne({id:id}, {checked: !foundevent.checked});

    res.send("ok");
})

//edit event
router.post('/editEvent', async(req, res)=>{
    
    let {name, des, id} = req.body;
    console.log(des);
    let updatedevent = await Event.updateOne({id:id}, {name : name, description : des});

    console.log(updatedevent);
    res.send("ok");
})

//get event
router.get('/getEvent/:id', async(req, res) =>{
    let id = req.params.id;
    console.log(id);
    let foundevent = await Event.findOne({id : id});
    // console.log(foundevent);
    res.send(foundevent);
})

//progress
router.get('/progress', async(req,res)=>{

    try {
        let events = await Event.find();
        let totalTasks = events.length;
        let completedTasks = events.filter(event => event.checked).length;
        let percentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
        res.send({ percentage });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }

});

module.exports = router;