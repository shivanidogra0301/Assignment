import React from 'react'
import classes from './Logo.module.css'
import src from '../../../Images/Logo.png'
const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img src ={src} alt="logo"/>
            <a href="#" className={classes.Logo}>VYORIUS</a>
        </div>
    )
}

export default Logo
