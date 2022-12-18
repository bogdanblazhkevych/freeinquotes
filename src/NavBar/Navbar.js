import Navbarcss from './Navbar.module.css';
import { useState, useRef, useEffect } from 'react';
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'
import logo from './FREEWHITE.png'
import { Link } from "react-router-dom";

export default function Navbar(){

    const menu = useRef(null);
    const up = useRef(null);
    const down = useRef(null);
    const center = useRef(null);
    const [menuOn, setMenuOn] = useState(false);

    const burgerClick = () => {
        
        const targetUp = up.current.style;
        const targetDown = down.current.style;
        const targetCenter = center.current.style;

        setMenuOn(!menuOn);

        menu.current.style.right = menuOn ? '-50vw' : '0px';
        targetUp.transform = menuOn ? '' : 'rotate(-45deg)';
        targetUp.width = menuOn ? '20px': '26px'
        targetUp.backgroundColor = menuOn ? 'black' : 'white';
        targetDown.transform = menuOn ? '' : 'rotate(45deg)';
        targetDown.backgroundColor = menuOn ? 'black' : 'white';
        targetDown.width = menuOn ? '20px' : '26px';
        targetCenter.transform = menuOn ? '' : 'translateX(50px)';
        targetCenter.backgroundColor = menuOn ? 'black' : "white";
    }

    return(
        <nav className={Navbarcss.navbar}>
        
            <Link to="/" className={Navbarcss.title}>

                <img src={logo} className={Navbarcss.logo} alt="FREE Logo"></img>

            </Link>

            <div className={Navbarcss.burger} onClick={burgerClick}>

                <div className={[Navbarcss.bun, Navbarcss.down].join(' ')} ref={down}></div>
                <div className={[Navbarcss.bun, Navbarcss.center].join(' ')} ref={center}></div>
                <div className={[Navbarcss.bun, Navbarcss.up].join(' ')} ref={up}></div>

            </div>

            <div className={Navbarcss.menu} ref={menu}>
                <div className={Navbarcss.links}>

                    <Link to="/Collection1" onClick={burgerClick}>Collection 1</Link>
                    <Link to="/" onClick={burgerClick}>Collection 2</Link>
                    <Link to="/Info" onClick={burgerClick}>Info</Link>
                    <Link to="/Contact" onClick={burgerClick}>Contact</Link>

                    <div className={Navbarcss.socials}>

                        <a href="https://www.instagram.com/freeinquotes/" target="_blank" rel="noreferrer">

                            <BsInstagram />

                        </a>

                        <a href="https://twitter.com/freeinquotes/" target="_blank" rel="noreferrer">

                            <BsTwitter />

                        </a>

                        <a href="https://www.tiktok.com/@freeinquotes" target="_blank" rel="noreferrer">

                            <FaTiktok />

                        </a>

                    </div>

                </div>

            </div>
        </nav>
    )
}