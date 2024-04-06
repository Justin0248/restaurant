import React from "react";
import './Header.scss'
export default function Header() {
 
    
return (
    <header>
        <a href="/"><img src= 'https://mail.google.com/mail/u/0?ui=2&ik=01a1175275&attid=0.1&permmsgid=msg-a:r-3530653264225395265&th=18c2f5bc52a25dae&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8WT1A-WyFp0gg00HvCMNR6ooU4EXoyW8mZDXsN4fnLE3TaLEzVvcjchmglCqZaXlKzWMveGrbsjTglOfk_pyfewsiB8KHQOv2LHHSkcNNCCpuRC8Z7KdsLH8o&disp=emb&realattid=18c2f5bbc88c05f94281'
             className= "logo"/></a>
        <div className="navs">
                <h2><a href ="/">home</a></h2>
                <h2><a href ="/menu">menu</a></h2>
                <h2><a href ="/about">about</a></h2>
        </div>
    </header>
    )
}

