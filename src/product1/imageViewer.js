import { useState, useEffect, useRef } from 'react'

export default function ImageViewer({ imageArray, width, height, imageCount, speed }){

    let arr = imageArray;
    
    const containerStyle = {
      width: width,
      height: height,
      border: "1px solid black",
      position: "relative"
    }

    const imageStyle = {
        width: "100%",
        height: "100%"
    }

    var interval = width / (imageCount * speed);

    var [isDragging, setIsDragging] = useState(false);
    var [initialMousePosition, setInitialMousePosition] = useState(null)
    var [currentMousePosition, setCurrentMousePosition] = useState(null) 
    var [currentImageIndex, setCurrentImageIndex] = useState(0)

    function getDisplayImage(){
        return arr[currentImageIndex]
    }

    const body = document.querySelector("body");

    function handleMouseDown(e){
        setInitialMousePosition(e.clientX)
        setIsDragging(true)
        body.style.position = 'relative';
        body.style.overflow = 'hidden';
      }

    function handleMouseUp(e){
        setIsDragging(false)
        setCurrentMousePosition(null)
        body.style.position = 'static';
        body.style.overflow = 'visible';
    }
    
    function handleMouseLeave(){
        setIsDragging(false)
        setCurrentMousePosition(null)
    }

    function handleMouseMove(e){
        if(!isDragging){return};

        setCurrentMousePosition(e.clientX);

        if(currentMousePosition === null){return};

        if((initialMousePosition - currentMousePosition) > interval){

            setInitialMousePosition((initialMousePosition)=>initialMousePosition - (initialMousePosition - currentMousePosition));

            if(currentImageIndex === (imageCount - 1)){
                setCurrentImageIndex(0)
            }else{
                setCurrentImageIndex(currentImageIndex + 1)
            };
        }

            if((initialMousePosition - currentMousePosition) < -interval){
                setInitialMousePosition((initialMousePosition) => initialMousePosition + interval);

                if(currentImageIndex === 0){
                    setCurrentImageIndex(imageCount - 1)
                }else{
                    setCurrentImageIndex(currentImageIndex - 1)
                }
            }
    }

    return (
        <>
            <div style={containerStyle} onMouseMove={handleMouseMove}
                                      onPointerMove={handleMouseMove}
                                      onMouseDown={handleMouseDown}
                                      onPointerDown={handleMouseDown}
                                      onMouseUp={handleMouseUp}
                                      onPointerUp={handleMouseUp}
                                      onMouseLeave={handleMouseLeave}
                                      onPointerLeave={handleMouseLeave}>
                <img src={getDisplayImage()} draggable={false} style={imageStyle}></img>
            </div>
        </>
      
    )
  }