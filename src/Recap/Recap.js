import recapcss from './Recap.module.css'
import art from './art.jpg'
import bogbot from './BOGBOT.jpg'
import bogtop from './BOGTOP.jpg'
import free from './free.jpg'
import shirt from './shirt.jpg'
import { useState, useEffect } from 'react';

export default function Recap(){

    let [loadingArr, setLoadingArr] = useState([])

    function loaded(e){
        let src = e.target.src
        console.log(src)
        setLoadingArr(oldArray => [...oldArray, src])
    }

    useEffect(()=>{
        if(loadingArr.length === 5){
            document.getElementById('recap').style.display = "block"
        }
    }, [loadingArr])

    return(
        <div className={recapcss.recap} id="recap">

            <img src={bogtop} alt="top picture" className={recapcss.top} onLoad={loaded}></img>

            <a href="https://www.instagram.com/freeinquotes/" target="_blank">

                <img src={free} alt="free" className={recapcss.free} onLoad={loaded}></img>

            </a>

            <img src={bogbot} alt="bottom picture" className={recapcss.bot} onLoad={loaded}></img>

            <div className={recapcss.bottombuttons}>

                <a href="https://web3-renaissance.myshopify.com/pages/art" target="_self" className={recapcss.abottom}> 

                    <img src={art} alt="art button" className={recapcss.button1} onLoad={loaded}></img>

                </a>

                <a href="https://web3-renaissance.myshopify.com/pages/shirts" target="_self" className={recapcss.abottom}> 

                    <img src={shirt} alt="shirt button" className={recapcss.button2} onLoad={loaded}></img>

                </a>

            </div>

        </div>
    )
}