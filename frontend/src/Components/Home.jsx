import React, { useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {


  let [mssg, setMssg] = useState("");

  let navigate = useNavigate();

  function handleClick(){
    console.log(window.localStorage.getItem('token'));

    if(window.localStorage.getItem('token') !== "" && window.localStorage.getItem('token') !== null)
        navigate("/AllEvents");
    else{
      console.log("notify");
    notify();
    }
  }

  function notify(){
    toast.error("Please login to continue !!",{
      position:'top-center',
      duration:10000,
    });
    
  }

  return (
    <div style={{background: "url('https://media.istockphoto.com/id/1783642891/photo/real-starfield-background.webp?b=1&s=170667a&w=0&k=20&c=sHO2hQ7yGH-7qWpHiXpV_ehdfXwLWx6lLgUct5dASA0=')"}}>
      <ToastContainer />
      {/* <h3>{mssg}</h3> */}
      <section className="hero text-center py-5">
        <div className="container">
          <h1 className="display-4">Welcome to TaskMaster</h1>
          <p className="lead">Organize your tasks and boost your productivity.</p>
          <button className="btn btn-outline-success me-2" style = {{color : 'white'}} onClick={handleClick}>Show Tasks</button>
        </div>
      </section>

      
      <section id="about" className="about py-5">
        <div className="container">
          <h2 className="text-center mb-4" style={{color : "white"}}>About TaskMaster</h2>
          <p>
            TaskMaster is a comprehensive task management tool designed to help you stay organized and increase your productivity. With features like task categorization, tagging, progress tracking, and reminders, TaskMaster ensures that you never miss a deadline.
          </p>
        </div>
      </section>

     
      <section id="contact" className="contact py-5">
        <div className="container">
          <h2 className="text-center mb-4">Contact Us</h2>
              
          <p className="text-center">We'd love to hear from you! Reach out to us at:</p>
          <div className="contact-info text-center">
            <p>Email: <a href="mailto:kushagra@example.com">kushagra.sharma_cs21@gla.ac.in</a></p>
            <p>Phone: <a href="tel:+1234567890">+91 8865070266</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/kushagra" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/kushagra-sharma-466669221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app</a></p>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Home;
