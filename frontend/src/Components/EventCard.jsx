import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function EventCard(props) {

  let navigate = useNavigate();

  console.log("in EventCArd");
  console.log(props.event);
  
  async function handleDel(){
      let id = props.event.id;

      props.delete(id);
  }

  function handleChange(){

    props.checked(props.event.id);
    
  }

  //need to send id in url as the edit operation cannot be performed in the same page, we need the id on another page to make the necessary changes there
  function handleEdit(){
    navigate(`/edit/${props.event.id}`);
  }

  return (
    <div style = {{padding : "15px"}}>
        <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src="https://elearningindustry.com/wp-content/uploads/2016/03/conducting-a-successful-task-analysis-6-benefits-you-cannot-overlook-e1457012771169.jpg" alt="Card image cap" />
        <div className="card-body">
        <h5 className="card-title">{props.event.name}</h5>
        <p className="card-text">{props.event.description}</p>
        <button className="btn btn-primary" onClick = {handleDel} style={{marginRight : "10px"}}>Delete</button>
        <button className="btn btn-primary" onClick = {handleEdit} style={{marginRight : "100px"}}>Edit</button>
        <input type="checkbox" checked = {props.event.checked} onChange={handleChange} className="form-check-input" style={{color : "blue"}}/>
        </div>
        </div>
    </div>
  )
}

export default EventCard;