import React from 'react'
import classes from './AboutSection.module.css'

const AboutSection = () => {
    return (
        <div className={classes.AboutSection}>
            <h4 className={classes.brownColor}>CONNECTING THE DICONNECTED</h4>
            <p className={classes.heading}><span className={classes.brownColor}>Vyorius</span> brings unmanned 
            robots <span className={classes.brownColor}>together</span>,<br/>wherever they are</p>
            <p className={classes.content}>With all of the operations,commanding and maintenance tools in one place,
                unmanned vehicles will stay connected and productive no matter where you're Delivering</p>
            <button className={classes.brownbutton}>Try Vyorius</button>
            <button className={classes.whitebutton}>Learn More</button>
            <p className={classes.displayinginline}>Need to order a delivery?</p>
            <a href="/">Get Started</a>
        </div>
    )
}

export default AboutSection
