function StudentInfoSection({schoolName, titleOfStudy, startStudy, endStudy}) {
  return (
    <div>
      <div>
        {schoolName}
      </div>
      <div>
        {titleOfStudy}
      </div>
      <div>
        {startStudy}
      </div>
      <div>
        {endStudy}
      </div>
    </div>
  )
};

export default StudentInfoSection;