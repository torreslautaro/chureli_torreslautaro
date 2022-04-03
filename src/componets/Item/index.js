const Item = ({id, title, price, image}) => {
  return(
    <>
    <p className="cardProduct-title">{title}</p>
    <img className="cardProduct-image" src={image} alt={title}></img>
    <p className="cardProduct-price">${price}</p>
    </>
  )
}

export default Item