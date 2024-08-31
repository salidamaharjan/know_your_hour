function Label({className,htmlFor, labelName}) {
    return <label className={`block text-gray-700 text-sm font-bold mb-2 ${className}`} htmlFor={htmlFor}>
        {labelName}
    </label>
}

export default Label;