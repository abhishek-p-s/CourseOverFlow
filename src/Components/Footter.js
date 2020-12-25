
import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import './Footter.css'

class Footter extends Component {

    render() {
        return (
            <>
                <nav className="navbar">
                    <div className="navbar-container">
                        <ul className='nav-menu'>
                            <li className="nav-item">
                                <Link to="/about" className="nav-links" >About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Termsandconditions" className="nav-links">Terms & Conditions</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}

export default Footter
