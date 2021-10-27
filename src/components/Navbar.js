import React from "react"
import logo from "../pharyLogo.png"


const Navbar =()=> {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark ">
  <divc className="container">
    <a className="navbar-brand" href="#"><img src={logo} alt="logo" className="logo"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-light"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Linkedin</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Portfolio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Github</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Resume</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Contact</a>
            </li>
        </ul>
   </div>
  </divc>
</nav>
        </div>
    )
}

export default Navbar
