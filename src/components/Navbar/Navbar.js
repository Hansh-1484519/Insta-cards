import React from 'react'
// import Button from '../Button/Button'
import './Navbar.css'

const Navbar = ({get_data}) => {
    return (
        <>    
            <div className='navbar'>
                <div className="navbar-brand">
                    <h1>Insta-Cards</h1>
                </div>
                <button className = "navbar-button" onClick = {get_data}>Get-Users</button>
            </div>
        </>
    )
}

export default Navbar