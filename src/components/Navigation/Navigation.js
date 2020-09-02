import React from 'react'
import classes from './Navigation.module.css'
import Logo from './Logo/Logo'
const Navigation = () => {
    return (
        <div className={classes.Navigation}>
            <Logo />
            <a className={classes.navlink} href="/"> Why Vyorius?</a>
            <a className={classes.navlink} href="/">Solutions</a>
            <a className={classes.navlink} href="/">Product</a>
            <a className={classes.navlink} href="/">Use Cases</a>
            <a className={classes.navlink} href="/">Team</a>
            <a className={classes.navlink} href="/">Partners</a>
            <a className={classes.navlink} href="/">Contact us</a>
            <button>Launch Vyorius &gt;</button>

        </div>
    )
}

export default Navigation
