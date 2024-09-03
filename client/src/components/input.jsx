function Input({id, placeholder, value, type, onChange, className}) {
    return <input id={id} type={type} value={value} onChange={onChange} placeholder={placeholder} className={className}></input>
}
export default Input;