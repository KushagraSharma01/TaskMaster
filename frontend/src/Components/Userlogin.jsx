import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Userlogin() {

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [mssg, setMssg] = useState('');

    let navigate = useNavigate();

    useEffect(()=>{

      if(mssg !== "Wrong Password" && mssg !== "user not registered" && mssg !== ""){
              
        window.localStorage.setItem('token', mssg);

        setTimeout(()=>{navigate('/')},3500);
    }
      
      if(mssg !== "" )
        notify();

    }, [mssg]);

    async function handleSubmit(e){
        e.preventDefault();

        try{
          let res = await axios.post("http://localhost:8080/login",{email, password});
          console.log(res);
            
          setMssg(res.data);
        }
        catch(err){
          console.log(err);
        }
        
// 
        setEmail("");
        setPassword("");
    }
    function notify(){
      if(mssg === "Wrong Password" || mssg === "user not registered")
        toast.error(mssg);
      else
        toast.success("User Logged in");
    }

  return (
    <section className="vh-100 gradient-custom" style={{backgroundImage : 'url("https://media.istockphoto.com/id/1783642891/photo/real-starfield-background.webp?b=1&s=170667a&w=0&k=20&c=sHO2hQ7yGH-7qWpHiXpV_ehdfXwLWx6lLgUct5dASA0=")'}}>
      <ToastContainer />
       {/* {mssg&&<div className="alert alert-primary" role="alert"> {mssg} </div>} */}
  <form onSubmit={handleSubmit}  className="container py-5 h-100" >
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5"  >
        <div className="card text-white" style={{ borderRadius: "1rem", backgroundColor: "#333a55" }} >
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">Login as User</h2>
              <p className="text-white-50 mb-5">Please enter your email and password!</p>

              <div data-mdb-input-init className="form-outline form-white mb-4">
                <input onChange={(e) => setEmail(e.target.value)} value={email}  required type="email" id="typeEmailX" className="form-control form-control-lg" />
                <label className="form-label" htmlFor="typeEmailX">Email</label>
              </div>

              <div data-mdb-input-init className="form-outline form-white mb-4">
                <input onChange={(e) => setPassword(e.target.value)} value={password} required type="password" id="typePasswordX" className="form-control form-control-lg" />
                <label className="form-label" htmlFor="typePasswordX">Password</label>
              </div>

              <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

              <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

              <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
              </div>

            </div>
	 </div>
        </div>
      </div>
    </div>
  </form>
</section>
  )
}

export default Userlogin;