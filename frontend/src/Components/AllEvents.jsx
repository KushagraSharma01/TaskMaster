import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Show from './Show';
import { useNavigate } from 'react-router-dom';
import Progressbar from './Progressbar';

 function AllEvents() {
    let [events, setEvent] = useState([]);
    let [gotres, setRes] = useState(false);
    let [op, setOp] = useState(0);
    let navigate = useNavigate();
    let [percentage, setPercentage] = useState(0);

    useEffect(()=>{
      
        check();
    },[op])

    async function check(){
    try{
        console.log("checking");
        let res1  = await axios.get('http://localhost:8080/showEvents');
        let res2 = await axios.get('http://localhost:8080/progress')
        console.log(res2.data.percentage);
        setPercentage(res2.data.percentage);
        console.log(res1);
        setEvent(res1.data);
        setRes(true);
    }
    catch(err){
        console.log(err);
    }
    }

    function handleClick(){
      navigate("/AddEvent");
    }
   
    //add an event
    async function addEvent(name, des, id){        //writing these methods here so that if any add and delete operations are done, they are reflected on the spot(by getting the events from db when op is done and then sending the updated events to other components) 
      
      let res = await axios.post('http://localhost:8080/addEvent', {name, des, id});

      setOp(op+1);
    }
    
    //delete an event
    async function deleteEvent(id){

      let res = await axios.post('http://localhost:8080/deleteEvent', {id:id});

      console.log("event deleted");
      setOp(op+1);
    }

    //clear all events
    async function clearAll(){
      let res = await axios.post('http://localhost:8080/clearAll');

      console.log('all Events Cleared');
      setOp(op+1);
    }

    //check an event
    async function checked(id){
      let res = await axios.post('http://localhost:8080/checked', {id:id});

      setOp(op+1);
    }

    //edit an event
    async function edit(name, des, id){
      let res = await axios.post('http://localhost:8080/checked', {name, des, id});

      setOp(op+1);
    }



  return (

    <div style={{
      backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL1SX-sw-2X389U3QKRpvKMHOKmRSQv_0-Vg&s)",backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat', height: '100vh', width: '100vw'                     
    }}>
      
      <button className="btn btn-primary me-2" onClick= {handleClick}>Add Task</button>
      <button className="btn btn-primary me-2" onClick= {clearAll}>ClearAll</button>
      <Progressbar percentage = {percentage}/>
      <h2 style={{marginLeft : "65px", color : "white"}}>Today's Tasks : </h2>
        {
        gotres == true ?
        <Show events = {events} add = {addEvent} delete = {deleteEvent} checked = {checked} /> :
        "Loading"
        }
    </div>

        
  )

}

export default AllEvents