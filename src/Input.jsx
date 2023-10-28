function Input({placeholder,
                onChange, 
                value,
                label,
                type,
                'data-key': dataKey}) {

  return (
    <div className="inputGroup">
      <label htmlFor={dataKey}>{label}</label>
      <input id={dataKey}
             type={type}
             placeholder={placeholder}
             onChange={onChange} 
             value={value} 
             data-key={dataKey}/>
    </div>
  )
}
export default Input;