import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';
// import uuid

function AddEvent() {
  const [name, setName] = useState('');
  const [des, setDes] = useState('');
  let navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission logic here
    let id = uuid();

    let res = await axios.post('http://localhost:8080/addEvent', {name, des, id});

    setName("");
    setDes("");
    navigate("/AllEvents");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add a Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Task Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="des">Task Description:</label>
          <textarea
            className="form-control"
            id="des"
            rows="3"
            value={des}
            onChange={(e) => setDes(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default AddEvent;
