import React  ,{ useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditEvent() {

    const {id} = useParams();

    const [name, setName] = useState('');
    const [des, setDes] = useState('');
    let navigate = useNavigate();

    useEffect(()=>{

        async function current(){
            let res = await axios.get(`http://localhost:8080/getEvent/${id}`);
            console.log(res);
            setName(res.data.name);
            setDes(res.data.description);
        }

        current();

    }, []);

    
    

    const handleSubmit = async(e) => {
        e.preventDefault();
        // Handle form submission logic here
    
        let res = await axios.post('http://localhost:8080/editEvent', {name, des, id});
        
        setName("");
        setDes("");
        navigate("/AllEvents");
      };

  return (
    <div>
        <div className="container mt-5">
      <h2 className="mb-4">Edit Task</h2>
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
    </div>
  )
}

export default EditEvent