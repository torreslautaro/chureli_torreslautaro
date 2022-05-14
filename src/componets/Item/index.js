const Item = ({id, title, price, image}) => {
  return(
    <>
    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
      <img className="w-full h-full object-center object-cover group-hover:opacity-75" src={image} alt={title}></img>
    </div>
    <h3 class="mt-4 text-sm text-gray-700">{title}</h3>
    <p class="mt-1 text-lg font-medium text-gray-900">${price}</p>
    </>
  )
}

export default Item