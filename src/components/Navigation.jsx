import { Link } from 'react-router-dom'
import React from 'react'

function Navigation () {
    return (
        <div style={{textAlign: "center"}}>
            <h1>MY PERSONAL WEBSITE</h1>
            <nav>
                <Link to='/'>HOME</Link> | {''}
                <Link to='about'>ABOUT</Link> | {''}
                <Link to='skill'>SKILL</Link> | {''}
                <Link to='blog'>BLOG</Link>
            </nav>
            <br></br>
            <hr></hr>

        </div>
    )
}

export default Navigation