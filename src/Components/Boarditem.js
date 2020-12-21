import React from 'react'
import { Link } from 'react-router-dom'

export default function Boarditem(props) {
    return (
        <>
            <li className='cards__item'>
                <Link className='cards__item__link' to={props.path}>
                    <div className='cards__item__info'>
                        <h4 className='cards__item__text'>{props.text}</h4>
                        <p className='cards__item__text'>{props.text2}</p>
                        <p className='cards__item__text'>{props.text3}</p>
                      <Link to="view"><input type="button" value="view" className="view"></input></Link>  
                    </div>
                </Link>
            </li>
        </>
    )
}
