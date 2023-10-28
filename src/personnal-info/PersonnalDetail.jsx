import Input from "../Input";

function PersonnalDetail({ firstName, lastName, email, birthday, onChange }) {
  return (
    <form>
      <Input type='text'
             value={firstName}
             placeholder='Votre prénom...'
             label='Prénom : '
             onChange={onChange} 
             data-key='firstName'/>
      <Input type='text'
             value={lastName}
             placeholder='Votre nom...'
             label='Nom : '
             onChange={onChange} 
             data-key='lastName'/>
      <Input type='email'
             value={email}
             placeholder='Votre email...'
             label='E-mail : '
             onChange={onChange}
             data-key='email'/>
      <Input type='date'
             value={birthday}
             label='Date de naissance : '
             onChange={onChange}
             data-key='birthday'/>
    </form>
  )
}

export default PersonnalDetail;