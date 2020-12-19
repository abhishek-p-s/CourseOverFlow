
import React from 'react'
import '../App.css'
import './FrontSection.css'
import Board from './Board'

export default function Home() {
    return (
        <div className="home-container">
            <p className="para">Search Courses</p>
            <div className="home-btn">
                <input type="text" className="text"></input>
                <button className="btn" >SEARCH</button>
            </div>
            <div className="slogen">
                <h3 >Knowledge increases by sharing but not by saving</h3>
            </div>
            <div className="board">
                <Board></Board>
            </div>
        </div >
    )
}
