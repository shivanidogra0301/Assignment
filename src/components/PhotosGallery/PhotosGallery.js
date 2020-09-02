import React from 'react'
import classes from './PhotosGallery.module.css' 
import src1 from '../../Images/Air.png'
import src2 from '../../Images/Indoor.png'
import src3 from '../../Images/Land.png'
import src4 from '../../Images/Map.jpg'
import src5 from '../../Images/Water.jpg'

const PhotosGallery = () => {
    return (
        <div className={classes.PhotosGallery}>
            <img className={classes.Map} src={src4} alt = "Map"/>
            <img className={classes.Air} src={src1} alt="Air"/>
            <button className={classes.darkblue}>Air</button>
            <img className={classes.Water} src={src5} alt="Water"/>
            <button className={classes.blue} >Water</button>
            <img className={classes.Land} src={src3} alt="Land"/>
            <button className={classes.green} >Land</button>
            <img className={classes.Indoor} src={src2} alt="Indoor"/>
            <button className={classes.grey}>Indoor</button>
            
            
            
        </div>
    )
}

export default PhotosGallery
