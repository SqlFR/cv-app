import React from "react";
import ViewInfos from "./ViewInfos";

export default function GeneralInformations(props) {

  const ref = React.useRef();
  let userInformations = []

  const saveInfo = (data) => {
  const arrOfGeneralInfo = ['firstName', 'lastName', 'email', 'tel']

  //Récuprère les data de FormData créé par le formulaire dans le compo : GeneralInformations
  addData(data, arrOfGeneralInfo, userInformations);

   /**Ajoute les datas dans un tableau
   * 
   * @param {FormData} data Les valeurs
   * @param {array} arrayOfValue Les clés
   * @param {array} array Tableau vide
   */
  function addData(data, arrayOfValue, array) {
    arrayOfValue.forEach((value) => array.push({key: value, value:data.get(value)}));
  }; 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    props.onSubmit(data)
    ViewInfos(data)
    console.log()
    e.target.reset();
  }
  
  function reset(e) {
    ref.current.reset();
  }


  return (
    <div>
      <form ref={ref} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">Prénom : </label>
          <input id='firstName' name='firstName' placeholder='Votre prénom...' type='text'/>
        </div>

        <div>
          <label htmlFor="lastName">Nom : </label>
          <input id='lastName' name='lastName' placeholder='Votre nom...' type='text'/>
        </div>

        <div>
          <label htmlFor="email">E-mail : </label>
          <input id='email' name='email' placeholder='Votre e-mail...' type='email'/>
        </div>

        <div>
          <label htmlFor="tel">Téléphone : </label>
          <input id='tel' name='tel' placeholder='Votre téléphone...' type='tel'/>
        </div>
        <button >Sauvegarder</button>
        <button type="button" onClick={reset}>Reset</button>
      </form>
    </div>
        
    )
}