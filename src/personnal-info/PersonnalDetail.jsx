import Input from "../components/Input";
import Button from "../components/Button";

function PersonnalDetail({ firstName, lastName, email, birthday, onChange, onSubmit }) {


  return (
    <form onSubmit={onSubmit}>
      <Input type='text'
             value={firstName}
             placeholder='Votre prénom...'
             label='Prénom'
             onChange={onChange} 
             data-key='firstName'/>
      <Input type='text'
             value={lastName}
             placeholder='Votre nom...'
             label='Nom'
             onChange={onChange} 
             data-key='lastName'/>
      <Input type='email'
             value={email}
             placeholder='Votre email...'
             label='E-mail'
             onChange={onChange}
             data-key='email'/>
      <Input type='date'
             value={birthday}
             label='Date de naissance'
             onChange={onChange}
             data-key='birthday'/>
      <div className='btnGroup'>
                  <Button type='submit' id='btnSave' value='Sauvegarder'/>
                </div>
    </form>
  )
}

export default PersonnalDetail;