function Input({id, placeholder, type, className}) {
    return <input id={id} type={type} placeholder={placeholder} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}></input>
}
export default Input;