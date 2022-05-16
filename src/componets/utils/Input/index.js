const Input = ({type = 'text', placeholder = '', required = false, textLabel = false, isForForm = false}) => {
  return(
    isForForm ?
    <div className="">
      <label className='flex flex-col gap-y-1 font-semibold'>
        <span>{textLabel}</span>
        <input required={required} type={type} placeholder={placeholder} className='outline-none p-1 border-b-2 text-center'/>
      </label>
    </div> : <input required={required} type={type} placeholder={placeholder} className=''/>
  )
}

export default Input