import React, { useState } from "react";
import './contact.css'

export default function Contact(){
    const [sommaires, setSommaires] = useState([
        {id: '1' , nom:  '1: La personnalisation du site'},
        {id: '2' , nom: '2: La performance du programme'},
        {id: '3' , nom: '3: La sécurité des données en ligne'},
        {id: '4' , nom: '4:  Le suivi des innovations technologiques'},
        {id: '5' , nom: '5:  La viabilité du projet'}

    ])
  const [form, setForm]= useState(false)

    function Form(){
        setForm(!form)
    }

    return<> <center><h3><b><span>N</span>ous <span>C</span>ontacter </b></h3></center>
    <div className="container">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <h5><b><span>P</span>ourquoi <span>D</span>evops ?</b></h5><br />
            <table>
            
                <thead>
               <p className="text-white"><strong><b>Sommaires</b></strong></p>
                </thead>
                <tbody>
                <th className="text-white">
                    {sommaires.map((sommaire)=>{
                        return <tr key={sommaire.nom}>
                            {sommaire.nom}
                        </tr>
                    })}
                </th>
                </tbody><br />
                <tfoot>
                    <button className="rounded-pill bg-dark text-white joindre"
                   onClick={Form} >Nous Joindre</button>
                   <a id="contact"></a>
                </tfoot>
            </table>
            </div> 
        
            <div className=" form  col-12 col-sm-12 col-md-6 col-lg-6">
               
            {form && < form action="" className="formulaire bg-white">
            <center><marquee behavior="" direction="center"><h3><span>R</span>emplire ce <span>F</span>ormulaire</h3></marquee></center>
                    <label htmlFor="nom">Nom*</label><br />
                    <input type="text" placeholder="votre Nom" /><br />
                    <label htmlFor="contact">Mail ou Tel*</label><br />
                    <input type="char" placeholder="mail ou telephone"/><br /> <br />
                   <center><input className="submit" type="submit" value="Submit"/></center>

                </form>}
                
                  </div>
            
        </div>
    </div>
    
    </>
}