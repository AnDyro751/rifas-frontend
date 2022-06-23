const InputComponent = ({
  type = 'text',
  placeholder = '',
  onChange,
  error = null,
  name = '',
  value = '',
  label = '',
  id = ''
}) => {
  return (
    <>
      <label
        className="text-sm font-bold"
        htmlFor={id}
      >
        {label}
        {error ? (
            <span className="text-red-600 font-normal">
              {` - ${error}`}
            </span>
          )
          :
          ''
        }
      </label>
      <input
        name={name}
        autoComplete={name}
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        className={`mt-2 input w-full input-bordered  ${error ? 'input-error' : ''}`}
      />
    </>
  )
}

export default InputComponent
