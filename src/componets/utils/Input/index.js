import './style.scss'
const Input = ({type = 'text', placeholder = '', required = false, textLabel = false, isForForm = false, className}) => {
  return(
    isForForm ?
    <div className={className}>
      <label className={className}>
        <span>{textLabel}</span>
        <input required={required} type={type} placeholder={placeholder}/>
      </label>
    </div> : <input required={required} type={type} placeholder={placeholder} className={className}/>
  )
}

export default Input