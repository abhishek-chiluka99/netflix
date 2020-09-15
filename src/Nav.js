import React , {useEffect, useState} from 'react'
import './Nav.css';

function Nav() {

 const [show,handleShow] = useState(false);

 
    useEffect(() => {
        
        window.addEventListener("scroll",()=>
        { 
            if(window.scrollY > 100)
             {
                 handleShow(true);
             }
             else
             handleShow(false);
        });

        return () =>
        {
            window.removeEventListener("scroll");
        };

    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img 
            className="nav_logo"
             src="https://lh3.googleusercontent.com/proxy/PixArevIEv5vBGFxy0Y1-iIt2TvsqNaf01kPhpSk0dkAy0TpbgWx-CnRMuPUn0yv-8Fk83xe7EQmFVQKqD2l5JAcSu8KEg1mMmegFtaRGAlecoLoa9o" alt="nav_logo"/>
            
            <img 
            className="nav_avtar"
            src="https://i.pinimg.com/originals/34/62/d2/3462d27440aa255b1c314ff16f4032b4.png" alt="nav_logo"/>
        </div>
    )
}

export default Nav
