const CardGrillaItems = ({item, isBuyOrder, removeItem = ''}) => {

  return(
    <div className='grid grid-rows-1 grid-cols-custom gap-4 border-b-2 pb-4 md:h-full'>
      <div className='w-24 col-start-1 col-end-2'>
        <img src={item.image} alt={item.title}></img>
      </div>
      <div className="grid grid-rows-2 grid-cols-custom-2 gap-3 col-start-2 col-end-3">
        <div>
          <p className="font-medium">{item.title}</p>
        </div>
        {
          !isBuyOrder ? 
          <div className='flex items-start justify-end'>
            <button className='flex justify-center items-center bg-red-400 px-4
            py-1 w-10 rounded shadow-md shadow-gray-400 hover:opacity-70
            transition-all active:transform active:translate-y-1' onClick={() => removeItem(item.id)}>
             <span className='text-white font-medium text-sm'>X</span>
            </button>
          </div> : ''
        }
        <div className='row-start-2 row-end-3'>
          <p className="font-medium">Cantidad: <span className="font-semibold">{item.quantity}</span></p>
        </div>
        <div className='flex justify-end row-start-2 row-end-3'>
          <p className="font-semibold">${item.price * item.quantity}</p>
        </div>
      </div>
    </div>
  )
}

export default CardGrillaItems