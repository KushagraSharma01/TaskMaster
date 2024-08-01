import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


function Navbar(){
    let [loggedin, setLoggedin] = useState(false);
    let [data, setData] = useState("");
    const location = useLocation();
    let navigate = useNavigate();


    useEffect(() => {
        
            try {
                if(window.localStorage.getItem('token') !== null)
                    setData(window.localStorage.getItem('token'));
                setLoggedin(window.localStorage.getItem('token') !== null);
                
            } catch (error) {
                console.error(error);
            }

    }, [location]);     //whenever location changes it re render this component

    function handleClick(){

        window.localStorage.clear();

        setData("");
        setLoggedin(false);
        navigate("/");
    }


  return (
      <nav className="d-flex justify-content-between navbar navbar-dark bg-dark" >
          <div>
              <Link className="btn btn-sm me-2" to={'/'} style={{color : 'white'}}>TaskMaster</Link>
          </div>
        {
        
        loggedin === false ?
          <div>
              <Link className="btn btn-outline-success me-2" to={'/login'}>Login</Link>
              <Link className="btn btn-outline-success me-2" to={'/signup'}>Signup</Link>
          </div>
        : <div>
            <button className="btn btn-outline-success me-2" onClick={handleClick} >Log Out</button>
        </div>

        }
      </nav>
  )
}

export default Navbar;
