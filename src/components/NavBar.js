import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <>
         <div class="container">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom p-3 text-bg-dark">
          <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <svg class="bi me-2" width="40" height="32"></svg>
            <img
        src="/2965879.png"
        alt="Bootstrap Icon"
        width="40"
        height="50"
        className="bi me-2"
      />
      <span className="fs-4 text-black font-family-arial fw-bold">FlashFeed</span>
          </a>
    
          <ul class="nav nav-pills">
            <li class="nav-item"><Link className="nav-link " aria-current="page" to="/">Home</Link></li>
            

            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
          </ul>
        </header>
      </div>
       </>
    )

}

export default NavBar
