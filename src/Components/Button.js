import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn-primary', 'btn-outline']
const SIZES = ['btn-medium', 'btn-large']


export const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const chechButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0]
    return (
        <Link to="login" className="btn-mmobile">
            <button className={`btn ${chechButtonSize} ${checkButtonStyle}`}
                onClick={onClick}
                type={type}>
                {children}
            </button>
        </Link>
    )
}