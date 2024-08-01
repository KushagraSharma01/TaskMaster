import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

function Usersignup() {

    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [mssg, setMssg] = useState('');

    let navigate = useNavigate();
    
    useEffect(()=>{
      if(mssg == "userData signup successfull"){
        
          setTimeout(()=>{navigate('/login')},3500);
        
      }
      if(mssg !== "")
        notify();
    }, [mssg]);

    async function handleSubmit(e){
        e.preventDefault();

        try{
            const res = await axios.post("http://localhost:8080/signup",{name, email, password});
            setMssg(res.data);
            
        }
        catch(err){
            console.log(err);
        }
        setName("");
        setEmail("");
        setPassword("");
    }
    function notify(){
      if(mssg !== "userData signup successfull")
        toast.error(mssg);
      else
        toast.success(mssg);
    }

  return (
    
    <section className="vh-100 gradient-custom" style={{backgroundImage : 'url("https://media.istockphoto.com/id/1783642891/photo/real-starfield-background.webp?b=1&s=170667a&w=0&k=20&c=sHO2hQ7yGH-7qWpHiXpV_ehdfXwLWx6lLgUct5dASA0=")'}}>
      <ToastContainer />
      {/* {mssg&& notify()} */}
  <form onSubmit={handleSubmit} className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card text-white" style={{ borderRadius: "1rem" , backgroundColor: "#333a55" }}>
          <div className="card-body p-5 text-center">
            <div className="mb-md-5 mt-md-4 pb-5">
              <h2 className="fw-bold mb-2 text-uppercase">User Sign Up</h2>
              <p className="text-white-50 mb-5">Please enter your email and password!</p>
              <div className="form-outline form-white mb-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => { setName(e.target.value); setMssg(''); }}
                  required
                  className="form-control form-control-lg"
                />
                <label className="form-label" htmlFor="name">Username </label>
              </div>

              <div className="form-outline form-white mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-control form-control-lg"
                />
                <label className="form-label" htmlFor="email">Email</label>
              </div>

              <div className="form-outline form-white mb-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="form-control form-control-lg"
                />
                <label className="form-label" htmlFor="password">Password</label>
              </div>

              <button className="btn btn-outline-light btn-lg px-5" type="submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</section>

  )
}

export default Usersignup