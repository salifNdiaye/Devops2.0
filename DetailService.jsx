import React, { useState } from "react";
import './detail.css'

export default function Detail(){
    
    return <div>
        <div className="container">
            <div className="row">
                <div className="app col-12 col-sm-12 col-md-6 col-lg-3">
                <div>
                    <center><h5><b><span>A</span>pp Mobile</b></h5>
                    <img className="imgdetail" src="/images/mobile.jpg"  alt="" /></center>
                    </div><br />
                    <div>
                   <p className="pmobille"> Une application mobile ou appli est un logiciel
                     applicatif
                     conçu pour un appareil électronique mobile, 
                    tel qu'un assistant personnel,
                     un téléphone portable, un smartphone, un baladeur numérique, une tablette tactile.</p>
                    </div>
                </div>
                <div className="app col-12 col-sm-12 col-md-6 col-lg-3">
                <div>
                    <center><h5><b><span>S</span>ite vitrine</b></h5>
                    <img className="imgdetail" src="/images/vitine.jpg"  alt="" /></center>
                    </div><br />
                    <div>
                   <p className="pmobille">
                   Un site vitrine est un site web qui se résume à la présentation d'une entreprise,
                    d'une organisation, d'un produit, etc. Il s'oppose au site marchand ou à la boutique en ligne qui offrent, de leur côté,
                    la possibilité de réaliser des transactions en ligne..</p>
                    </div>
                </div>
                <div className="app col-12 col-sm-12 col-md-6 col-lg-3">
                <div>
                    <center><h5><b><span>S</span>ite Commerce</b></h5>
                    <img className="imgdetail" src="/images/commerce.jpg"  alt="" /></center>
                    </div><br />
                    <div>
                   <p className="pmobille"> Un site E-Commerce est un site qui permet de réaliser des ventes en ligne. Comme un magasin physique, le site E-Commerce est une vitrine utilisée par les commerçants pour exposer leurs
                    produits et leurs services pour toucher un public ciblé qui pourrait les achete.</p>
                    </div>
                </div>
                <div className="app col-12 col-sm-12 col-md-6 col-lg-3">
                <div>
                    <center><h5><b><span>A</span>pp Mobile</b></h5>
                    <img className="imgdetail" src="/images/gestion.jpg"  alt="" /></center>
                    </div><br />
                    <div>
                   <p className="pmobille"> Un logiciel de gestion est un logique de pratique qui effectue de la gestion de données, c'est-à-dire de la manipulation de grande quantité d'informations (collecte, classement,
                    exploration, recherche) pour les besoins d'une application informatique comme un logiciel de facturation....</p>
                    </div>
                </div>
                
            </div>
        </div>

    </div>
}