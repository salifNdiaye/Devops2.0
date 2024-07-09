import React, { useState } from "react";
import Detail from "./DetailService";
import './section2.css'

export default function Service({show, setShow}){
    const [formation, setFormation] = useState([
        {id: "1", nom:'App Mobile'},
        {id: "2", nom:'Logiciel de Gestion'},
        {id: "3", nom:'Site Vitine'},
        {id: "4", nom:'Site E-commerce'},
        {id: "5", nom:'App Industiel'}
    ])

    function ShowDetail(){
        setShow(!show)
    }

    
    return<>
     <div><center><h1><b><span>N</span>os <span>S</span>ervices</b></h1></center></div> <br />
    <div className="container section2">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <img className="imgsection2" src="/images/dev3.jpg" alt="" />
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
           <center><h2 className="title text-white">Nous proposons :</h2></center>  <br />
                <ol>
                <a id="service"></a>
                    {formation.map((formations)=>{
                        return <li className="text-white li"
                         key={formations.id}><b>{formations.nom}</b></li>
                    })}
                </ol><br />
                
                <button className="detailbtn"
                onClick={ShowDetail}>Details +</button>
            </div> 
        </div>
    </div>
    <div className="container secudevops">
                <br /> <br />
            <center><p className="text-white">La sécurité DevOps est une philosophie qui combine trois mots : développement, opérations et sécurité. L’objectif est de supprimer tous les obstacles
                 qui peuvent exister entre le développement logiciel et les opérations informatiques. </p></center>
            </div>
            
    </>
}