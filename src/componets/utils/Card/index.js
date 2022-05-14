const Card = ({children, title}) => {
  console.log(children)
  return(
    <div className="cardContainer">
      <h2 className="cardTittle">{title}</h2>
      {children}
    </div>
  )
}
export default Card