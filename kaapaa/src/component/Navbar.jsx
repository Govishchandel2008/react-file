import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {

    return (
       
    <nav>
        <h1>ATKT</h1>
        <menu>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/Project"}>Project</Link>
                </li>
                <li>
                    <Link to={"/Service"}>Service</Link>
                </li>
                <li>
                    <Link to={"/About"}>About</Link>
                </li>
                
            </ul>
        </menu>
    </nav>
                
        

        
    )
} 
    