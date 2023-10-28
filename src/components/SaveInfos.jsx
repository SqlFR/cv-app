export default function SaveInfos(data) {

  let userInformations = []
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
  
  return userInformations.length > 0
}