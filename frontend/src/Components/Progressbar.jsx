import React from 'react'
import axios from 'axios' 
import './Progressbar.css';

function Progressbar(props) {
    let percentage = props.percentage;
 
  return (
    
    <div className="progress-bar-container">
        <h2 style={{color : "white"}}>Progress Bar</h2>
            <div className="progress-bar">
                <div
                    className="progress-bar-fill"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
            <div className="progress-bar-percentage" >
                {percentage.toFixed(2)}%   
                {/* <br></br> {percentage <= 20 ?"Come On!! You can do more !" :"Great"} */}
            </div>
        </div>
  )
}

export default Progressbar