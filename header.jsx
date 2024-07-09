
import React from 'react'
import './header.css' 

export  default function Header (){

    return <>  <nav className="header bg-primary ">
   <h3><b>DEVOPS <span>2.0</span> </b></h3>
    <ul>
        
        <li><a className="text-white" href="#home"><b>Acceuil</b></a></li>
        <li><a className="text-white" href="#service"><b> Service</b></a></li>
        <li><a className="text-white" href="#apropo"><b> A propos</b></a></li>
        <li><a className="text-white" href="#contact"><b> Contact</b></a></li>
    </ul>
   </nav> 
   
   </> 
}

