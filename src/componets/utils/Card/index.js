const Card = ({children, title, isBuyOrder = false}) => {
  
  const moreStyle = isBuyOrder ? '' : ''
  return(
    <div className={`flex flex-col justify-center items-center w-full h-full self-center my-14 p-4 gap-y-8 md:w-3/5 ${moreStyle}`}>
      <h2 className="text-2xl text-indigo-500 font-bold">{title}</h2>
      {children}
    </div>
  )
}
export default Card