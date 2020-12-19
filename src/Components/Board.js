import React from 'react'
import Boarditem from './Boarditem'
import './Board.css'

export default function Board() {
    return (
        <div className="cards">
            <div className="cards__container">
                <div className="cards__wraper">
                    <ul className="cards__items">
                        <Boarditem
                            src="../images/book_image.jpg"
                            text="Traditional Arabic"
                            text2="2 enrolled members 2 months ago"
                            text3="its all about traditional culture"
                            path="/arabic"
                        ></Boarditem>
                        <Boarditem
                            src="../images/book_image.jpg"
                            text="Arabic Grade 4"
                            text2="2 enrolled members 2 months ago"
                            text3="This is a demonstration class"
                            path="/arabic"
                        ></Boarditem>
                    </ul>
                </div>
            </div>
        </div>
    )
}