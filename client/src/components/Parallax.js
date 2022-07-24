import React from "react";
import { ParallaxBanner } from 'react-scroll-parallax';

//import Parallax images
//not a very elegant solution if more images are needed down the line
import mit from '../assets/images/parallax/wenhao-ryan-zGx9P250WaE-unsplash.jpg'
import defaultImg from '../assets/images/parallax/thisisengineering-raeng-nyAzMQ6Ejgs-unsplash.jpg'

export default function Parallax(props) {
    let displayImgPath

    switch(props.imagePath) {
        case 'wenhao-ryan-zGx9P250WaE-unsplash.jpg':
            displayImgPath = mit
            break;
        default:
            displayImgPath = props.imgPath
    }

    return(
        <>
            <ParallaxBanner
                layers = {[{ image: displayImgPath , speed: 15}]}
                style = {{ 
                    aspectRatio: `${props.aspectRatio} / 1`
                }}
            />
            
        </>
    )
}

Parallax.defaultProps = {
    imgPath: defaultImg,
    aspectRatio: '5',
}
