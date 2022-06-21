const InputComponent = ({
  type = 'text',
  placeholder = '',
  onChange,
  error = null,
  name = '',
  value = '',
}) => {
  return (
    <input
      name={name}
      autoComplete={name}
      onChange={onChange}
      value={value}
      type={type}
      placeholder={placeholder}
      className={`input w-full ${error ? 'input-bordered input-error' : ''}`}
    />
  )
}

export default InputComponent
