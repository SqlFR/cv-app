import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";


function StudentDetail({schoolName, titleOfStudy, startStudy, endStudy, onChange}) {

  return (
    <>    
      <form>      
      <Input type='text'
             value={schoolName}
             placeholder="Nom de l'école..."
             label='Ecole'
             onChange={onChange}
             data-key={'schoolName'}/>
      <Input type='text'
             value={titleOfStudy}
             placeholder="Nom du diplôme..."
             label='Diplôme'
             onChange={onChange}
             data-key={'titleOfStudy'}/>
      <div className="dateGroupe">
        <Input type='date'
              value={startStudy}
              label='Date de début'
              onChange={onChange}
              data-key={'startStudy'}/>
        <Input type='date'
              value={endStudy}
              label='Date de fin'
              onChange={onChange}
              data-key={'endStudy'}/>
      </div>
    </form>   
    </>
  )
};

export default StudentDetail;