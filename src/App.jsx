import { useState } from 'react';
import './App.css';
import PersonnalDetail from './personnal-info/PersonnalDetail';
import PersonnalInfoSection from './personnal-info/PersonnalInfoSection';
import exampleData from './example';
import StudentDetail from './personnal-info/StudentDetail';
import StudentInfoSection from './personnal-info/StudentInfoSection';

function App() {

  const [personnalDetail, setPersonnalDetail] = useState(exampleData.personnalDetail);
  const [studentDetail, setStudentDetail] = useState(exampleData.studentDetail);

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
      <div className='headerEditSection'></div>
      <div className='editSection'>
        <span>Informations Générales</span>
        <PersonnalDetail 
          firstName={personnalDetail.firstName}
          lastName={personnalDetail.lastName}
          email={personnalDetail.email}
          birthday={personnalDetail.birthday}
          onChange={handleChangePersonnalDetail}/>

          <span>Etudes</span>
        <StudentDetail 
          schoolName={studentDetail.schoolName}
          titleOfStudy={studentDetail.titleOfStudy}
          onChange={handleChangeStudentDetail}/>  
      </div>
      
      <div className='viewSection'>
        <PersonnalInfoSection 
          firstName={personnalDetail.firstName}
          lastName={personnalDetail.lastName}
          email={personnalDetail.email}
          birthday={personnalDetail.birthday}
          />
        <StudentInfoSection 
          schoolName={studentDetail.schoolName}
          titleOfStudy={studentDetail.titleOfStudy}
          startStudy={studentDetail.startStudy}
          endStudy={studentDetail.endStudy}/>
      </div>
    </div>
    
  )
}


export default App
