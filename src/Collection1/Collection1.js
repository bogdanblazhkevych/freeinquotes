import collection1css from './Collection1.module.css';
import { useState, useEffect } from 'react';
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import { Link } from "react-router-dom";

export default function Collection1(){

    let [loadingArr, setLoadingArr] = useState([])

    function loaded(e){
        let src = e.target.src
        console.log(src)
        setLoadingArr(oldArray => [...oldArray, src])
    }

    useEffect(()=>{
        if(loadingArr.length === 3){
            document.getElementById('collection1').style.display = "block"
        }
    }, [loadingArr])

    return(
        <div className={collection1css.collection1} id='collection1'>

            <h1 className={collection1css.free}>FEEL FREE TO PICK A SHIRT</h1>

            <a href="https://web3-renaissance.myshopify.com/pages/shirts">

                <img src={image1} alt="T-SHIRTS" className={collection1css.backgroundimg} onLoad={loaded}></img>

            </a>

            <div className={collection1css.bottombuttons}>

                <a href="https://web3-renaissance.myshopify.com/pages/shirts" className={collection1css.bottombutton}>

                    <img src={image2} alt="BUY" className={collection1css.button1} onLoad={loaded}></img>

                </a>

                <Link to="/Recap" className={collection1css.bottombutton}>

                    <img src={image3} alt="VIEW" className={collection1css.button2} onLoad={loaded}></img>

                </Link>

            </div>

        </div>
    )
}