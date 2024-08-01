import React, {useState, useEffect} from 'react';
import EventCard from './EventCard';


function Show(props) {
    console.log(props.event);
   

      let events = props.events.map((item, index) => {
        return <EventCard event = {item} key = {index} delete = {props.delete} add = {props.add} checked = {props.checked} />
    });

  

    


  return (
    <div style = {{display : 'flex', padding:"50px", flexWrap : "wrap", 
      backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL1SX-sw-2X389U3QKRpvKMHOKmRSQv_0-Vg&s)",backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat', height: '100vh', width: '100vw'                     
    }}>
        {events}
    </div>
  )
}

export default Show