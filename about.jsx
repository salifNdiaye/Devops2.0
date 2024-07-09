import React from "react";
import './about.css'

export default function About(){
    return<>
    <a id="apropo"></a>
    <center><h1><b><span>P</span>ourquoi <span>D</span>evops ?</b></h1></center>
    <div className="container about">
            <div className="row">
                <div className="app col-12 col-sm-12 col-md-6 col-lg-6">
                    <p>
                    Notre société (<span><i>DEVOPS</i></span> )possède une vaste expérience dans le développement 
                    d'applications d'entreprise et fournit des solutions logicielles de haute qualité qui
                     répondent aux besoins uniques des entreprises de divers secteurs. Notre équipe de développeurs 
                     chevronnés s'appuie sur des technologies de pointe et des méthodologies agiles pour créer des applications d'entreprise robustes, évolutives et sécurisées
                     qui stimulent la croissance et rationalisent les opérations.
                    </p>
                </div>
                <div className="app col-12 col-sm-12 col-md-6 col-lg-6">
                    <img className="imgabout" src="./images/about.jpg" alt="" />
                </div>
                
             </div>
  </div>
    </>
}