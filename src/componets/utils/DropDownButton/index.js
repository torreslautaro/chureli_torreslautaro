import { Link } from "react-router-dom"


const DropDownButton = ({category}) => {

  const menu = document.querySelector('#dropdownMenu'); 
  
  
  const handleClick = () => {
      menu.classList.toggle('hidden');
  }

  return (
    <>
      <div className="relative">
        <button onClick={handleClick}
          className="flex items-center whitespace-nowrap"
          type="button"
        >
          Categorias
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <ul
          className=" absolute hidden bg-white text-base list-none"
          id="dropdownMenu"
          aria-labelledby="dropdownMenuButton1"
        >
          {category.map(cat => {
            return (
              <li key={cat.id}>
                <Link to={`categories/${cat.id}`}
                  onClick={handleClick}
                  className="w-max text-sm py-2 px-4 block bg-transparent text-gray-700 hover:text-white hover:bg-indigo-400"
                  href="#"
                >
                  {cat.name}
                </Link>
            </li>
            )
          })}
        </ul>
      </div> 
    </>
  )
}

export default DropDownButton