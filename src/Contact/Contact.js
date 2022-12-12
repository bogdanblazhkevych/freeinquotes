import contactcss from './contact.module.css';
import { useState, useRef, useEffect } from 'react';

export default function Contact(){

    return(
        <div className={contactcss.contact}>
            <a href="mailto:freeinquotes@gmail.com">freeinquotes@gmail.com</a>
        </div>
    )
}