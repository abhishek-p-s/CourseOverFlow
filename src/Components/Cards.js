import React from 'react'
import Carditem from './Carditem'
import './Card.css'

export default function Cards() {
    return (
        <div className="cards">
            <div className="cards__container">
                <div className="cards__wraper">
                    <ul className="cards__items">
                        <Carditem
                            src="../teacher.jpg"
                            text="share your knowledge,gain not only power, money as well.
                             Schedule your classes and let student join your online session"
                            label="TEACHER"
                            path="/teacher"
                        ></Carditem>
                        <Carditem
                            src="../student.png"
                            text="it is easy for students to search for courses they want. One click enrollment to the course.
                            you can pay the fees at your convenience. Structure your course materials in a proper manner "
                            label="STUDENT"
                            path="/student"
                        ></Carditem>
                    </ul>
                </div>
            </div>
        </div>

    )
}
