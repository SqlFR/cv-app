function Button({id, value, type, onClick}) {
  return (
    <button className="btn" id={id} type={type} onClick={onClick}>{value}</button>
  )
};

export default Button;