import React from 'react'
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
     <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          Feature-Rich IPL 
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/TeamDetail">
                Teams
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/TimeTable">
                Time-Table
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/employees">
                employees
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/input">
                input 
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo1">
                FormDemo1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo2">
                FormDemo2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo3">
                FormDemo3
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/studentform">
                StudentForm
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/registerform">
                RegisterForm
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formallvalidation">
                FormAllValidation
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formwatch">
                FormWatch
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  )
}
