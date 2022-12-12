import footercss from './Footer.module.css';
import { useState, useRef, useEffect } from 'react';

export default function Footer(){

    return(
        <div className={footercss.footer}>
            <span>&#8220;</span>FREE<span>&#8221;</span> &#8482; 2022
        </div>
    )
}