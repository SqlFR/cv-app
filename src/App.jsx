import { useState } from 'react';
import './styles/App.css';
import PersonnalDetail from './personnal-info/PersonnalDetail';
import PersonnalInfoSection from './personnal-info/PersonnalInfoSection';
import exampleData from './example';
import blankData from './blank';
import StudentDetail from './personnal-info/StudentDetail';
import StudentInfoSection from './personnal-info/StudentInfoSection';
import Button from './components/Button';


function App() {
  
  const [personnalDetail, setPersonnalDetail] = useState(exampleData.personnalDetail);
  const [studentDetail, setStudentDetail] = useState(exampleData.studentDetail);
  const [isShowStudent, setIsShowStudent] = useState(false);
  const [isShowPersonal, setIsShowPersonal] = useState(true);

  const hideAndShowPersonal = (e) => {
    let img = document.getElementById(e.target.id);
    isShowPersonal ? img.style.transform = 'rotate(180deg)' : img.style.transform = 'rotate(0deg)';
    setIsShowPersonal(isShowPersonal ? false : true);    
  }

  const hideAndShowStudent = (e) => {
    let img = document.getElementById(e.target.id);
    isShowStudent ? img.style.transform = 'rotate(180deg)' : img.style.transform = 'rotate(0deg)';
    setIsShowStudent(isShowStudent ? false : true);
  }

  const resetAll = () => {
    setPersonnalDetail(blankData.personnalDetail);
    setStudentDetail(blankData.studentDetail);
  }

  const loadExemple = () => {
    setPersonnalDetail(exampleData.personnalDetail);
    setStudentDetail(exampleData.studentDetail);
  }

  function saveInputValue(obj) {
    console.log(obj.personnalDetail)
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    const formData = {
      personnalDetail: {
        firstName: personnalDetail.firstName,
        lastName: personnalDetail.lastName
      }
    }
    saveInputValue(formData)
  }


  

  function handleChangePersonnalDetail(e) {
    const { key } = e.target.dataset;
    setPersonnalDetail({...personnalDetail, [key]: e.target.value});
  }

  function handleChangeStudentDetail(e) {
    const { key } = e.target.dataset;
    setStudentDetail({...studentDetail, [key]: e.target.value})
  }

  
  return (
    <div className='main'>
      <div className='section leftSection'></div>
      <div className='section' id='headerEditSection'>
          <Button id="btnHeaderEditSection" type='button' onClick={resetAll} value='Réinitialiser'/>
          <Button id="btnHeaderEditSection" type='button' onClick={loadExemple} value="Charger l'exemple"/>
      </div>
      <div className='editSection'>
        
        <div className='section'>
          <div className='personalEditSection'>
            <div className='topSection'>
              <span className='titleSection'>Informations Générales</span>
              <img className='icon' id="iconPersonal" src='./src/assets/arrow.png' onClick={hideAndShowPersonal}/>
            </div>            
            {isShowPersonal && (
              <>      
                <PersonnalDetail 
                  firstName={personnalDetail.firstName}
                  lastName={personnalDetail.lastName}
                  email={personnalDetail.email}
                  birthday={personnalDetail.birthday}
                  onChange={handleChangePersonnalDetail}
                  onSubmit={onSubmitForm}/>
                
              </>     
            )}
          </div>          
        </div>
        
        <div className='section'>
          <div className='studentEditSection'>
          <div className='topSection'>
            <span className='titleSection'>Etudes</span>
            <img className='icon' id="iconStudent" src='./src/assets/arrow.png' onClick={hideAndShowStudent}/>
          </div>
            {isShowStudent && (
              <>
              <StudentDetail 
                schoolName={studentDetail.schoolName}
                titleOfStudy={studentDetail.titleOfStudy}
                startStudy={studentDetail.startStudy}
                endStudy={studentDetail.endStudy}
                onChange={handleChangeStudentDetail}/>
              <div className='btnGroup'>
              </div>
              </>
              )}
          </div>
          
        </div>        
      </div>
      
      <div className='section viewSection'>
        <div className='personalViewSection'>
          <PersonnalInfoSection 
            firstName={personnalDetail.firstName}
            lastName={personnalDetail.lastName}
            email={personnalDetail.email}
            birthday={personnalDetail.birthday}/>
        </div>
        <div className='studentViewSection'>
          <StudentInfoSection 
            schoolName={studentDetail.schoolName}
            titleOfStudy={studentDetail.titleOfStudy}
            startStudy={studentDetail.startStudy}
            endStudy={studentDetail.endStudy}/>
        </div>        
      </div>
    </div>
    
  )
}


export default App
 