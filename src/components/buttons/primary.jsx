const PrimaryButtonComponent = ({ text, disabled, onClick = null }) => {

  return (
    <button
      disabled={disabled}
      onClick={onClick ? onClick() : null}
      className={`btn btn-primary ${disabled ? 'cursor-not-allowed btn-disabled' : ''}`}>
      {text}
    </button>
  )

}

export default PrimaryButtonComponent
