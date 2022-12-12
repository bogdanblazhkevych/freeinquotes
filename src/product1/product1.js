import product1css from './product1.module.css';
import { React360Viewer } from "react-360-product-viewer";
import { useState, useRef, useEffect } from 'react';
import spinlogo from './360.png'

export default function Product1({props: {item, name, price, images, link, description}}){

    var [viewerSize, setViewerSize] = useState(500);
    var [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(()=>{

        function reportWindowSize() {
            setWindowWidth(window.innerWidth)
          }

        window.addEventListener("resize", reportWindowSize);

    }, [])

    useEffect(()=>{
        if(windowWidth < 415){
            setViewerSize(300);
            return
        }
        if(windowWidth < 530){
            setViewerSize(400);
            return
        }
        if(windowWidth > 530){
            setViewerSize(500);
            return
        }
    }, [windowWidth])

    function handleSpinClick(e){
        e.stopPropagation()
        let icon = document.getElementById('spinIcon');
        icon.style.display = "none";
    }

    return(
        <div className={product1css.product1}>

            <div className={product1css.item}>

                <br></br>
            
                <h1>{name}</h1>

                <br></br>

                <div className={product1css.spinContainer} onPointerDown={handleSpinClick}>
                    <React360Viewer
                                    imagesBaseUrl={images}
                                    imageFilenamePrefix={item + "-"}
                                    imagesCount={16}
                                    imagesFiletype="jpg"
                                    mouseDragSpeed={5}
                                    width={viewerSize}
                                    height={viewerSize}
                                    shouldNotifyEvents={true}
                                    notifyOnPointerDown={handleSpinClick}
                                    // notifyOnPointerMoved={handleSpinClick}
                    />
                    <div className={product1css.spinIcon} id="spinIcon"></div>
                </div>

                <br></br>

                <div className={product1css.button}>

                    <a href={link}>{price}</a>
                    
                </div>

                <div className={product1css.description}>

                    {description}

                </div>

            </div>

        </div>
    )
}
