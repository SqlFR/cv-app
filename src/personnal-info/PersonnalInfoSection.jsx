function PersonnalInfoSection({firstName, lastName, email, birthday}) {
  return (
    <div>
      <div>
        {firstName}
      </div>
      <div>
        {lastName}
      </div>
      <div>
        {email}
      </div>
      <div>
        {birthday}
      </div>
    </div>
  )
};

export default PersonnalInfoSection;