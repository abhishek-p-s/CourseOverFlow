import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            click: false,
            button: true
        }
    }

    handleChange = () => {
        this.setState({ click: !this.state.click })
    }
    closeMobileview = () => {
        this.setState({ click: false })
    }
    render() {
        return (
            <>
                <nav className="navbar">
                    <div className="navbar-container">
                        <Link to="/" className="navbar-logo" onClick={this.closeMobileview}>COURSEOVERFLOW</Link>
                        <div className="menu-icon" onClick={this.handleChange}>
                            <i className={this.state.click ? 'fa fa-times' : 'fa fa-bars'} />
                        </div>
                        <ul className={this.state.click ? 'nav-menu active' : 'nav-menu'} >
                            <li className="nav-item">
                                <Link to="/login" className="nav-links" onClick={this.closeMobileview}>LOGIN</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register" className="nav-links" onClick={this.closeMobileview}>REGISTER</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar
