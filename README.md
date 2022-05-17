
# ChureLi - Ecommerce

Proyecto realizado para el curso de ReactJS en @coderhouse


## Tech Stack

**Client:** React, TailwindCSS

**Server:** Firebase


## Features

- Vista general con todo el listado de productos.
- Buscador por categorias
- Seccion de ofertas
- Vista en detalle del producto
- Carrito de compras
- Generacion de orden de compra


## API Reference

Para el proyecto se utilizo Firebase como backend as a service.
A continuacion se explicaran como son las colecciones que tiene el proyecto.

#### Products


| Campo | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | Autogenerado por Firebase |
| `title` | `string` | Titulo del producto |
| `price` | `number o array` | Precio del producto. Si la condicion del producto es oferta, el campo debe contener un array donde en la primera posicion se debe colocar el precio nuevo y en la siguiente posicion el precio anterior. |
| `description` | `string` | Descripcion del producto |
| `category` | `string` | ID de la categoria perteneciente |
| `image` | `string` | Imagen del producto |
| `condition` | `string` | Condicion del producto. Ej: Nuevo, Oferta |
| `stock` | `number` | Cantidad de productos disponibles |

#### Categories


| Campo | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | Identificador de la categoria |
| `name`      | `string` | Categoria |

#### Las categorias usadas en el proyecto son:

{
    id: "24f57w",
    name: "Accesorios"},
  {
    id: "28f5gww",
    name: "Ofertas"
  },
  {
    id: "21fsd5w",
    name: "Calzado"
  },
  {
    id: "15sd15s",
    name: "Indumentaria"
  }

#### BuyOrders


| Campo | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | Autogenerado por firebase |
| `buyer`      | `map` | Objeto con los datos del comprador. Contiene las siguientes keys: nombre, apellido, email, telefono. |
| `date`      | `date` | Fecha de la compra |
| `items`      | `array` | Array de los productos que se compraron |
| `total`      | `number` | Total de la compra |

## Environment Variables

Para poder ejecutar este proyecto hay que tener las siguientes varibles(son las que genera firebase cuando creas una aplicacion) de entorno en el archivo.env

`REACT_APP_APIKEY`

`REACT_APP_AUTHDOMAIN`

`REACT_APP_PROJECTID`

`REACT_APP_STORAGEBUCKET`

`REACT_APP_MESSAGINSENDERID`

`REACT_APP_APPID`

## Dependencies

El proyecto cuenta con algunas dependicias las cuales deben instalarse para su correcto funcionamiento

`Firebas`

`TailwindCSS`

`React-Router-Dom`
## Run Locally

Clonar el repositorio

```bash
  https://github.com/torreslautaro/chureli_torreslautaro.git
```

Ir al directorio del proyecto

```bash
  cd chureli_torreslautaro
```

Instalar las dependencias

```bash
  npm install
```

Ejecutar el servidor

```bash
  npm run start
```


## Componentes

- **NavBar:**  Este componente tiene como objetivo visualizar un Navbar dentro del header de la aplicacion, incluyendo el logo, la busqueda por categorias y mostrando el usuario logueado.

- **ItemListContainer:** Este componente tiene como objetivo contener la lista de los productos. Tambien es el encargador de llamar al custom hook useAsyn el cual se encarga a travez de un useEffect de ejecutar la funcion async para poder traer el listado de productos.

- **ItemList:** Este componente tiene como objetivo poder decidir si debe visualizar el Spinner de loading o debe visualizar los items correspondientes a cada producto.

- **Item:** Este componente contiene el template y el diseño de cada producto que se muestra en la home.

- **ItemDetailContainer:** Este componente tiene como objetivo contener el componente que mostrara el detalle del producto. Tambien es el encargador de llamar al custom hook useAsyn el cual se encarga a travez de un useEffect de ejecutar la funcion async para poder traer el detalle del producto, asi como tambien en caso de que la funcion se este ejecutando, poder mostrar un Spinner de carga.

- **ItemDetail:** Es el encargado de mostrar el template con todo el detalle de cada producto. Asi como tambien de alojar al componente ItemCount el cual nos permite agregar el producto que estemos visualizando al carrito de compras.

- **ItemCount:** Es el componente que se encarga de agregar un determinado producto al carrito de compras.

- **CartWidget:** Este componente es el encargado de poder visualizar en el navbar la cantidad de productos que tenemos en el carrito. Si el carrito esta vacio el widget no se muestra.

- **Cart:** Componente encargado de visualizar el carrito de compras, mostrando todos los productos con su cantidad y precio, permitiendo borrar por producto o vaciando el carrito en su totalidad. Desde el mismo se puede acceder a "Terminar compra" que es donde se llenaran los datos finales para terminar con la gestion.

- **BuyOrder:** Componente encargado de generar la orden de compra. Primero se deben completar los datos personales del comprador para continuar. Si todo esta correcto mostrara un mensaje con el id de la orden. En caso de que algun producto no tenga stock mostrara un mensaja indicando cual es el producto.

## Componentes/Utils

En esta ruta del proyecto se encontraran componentes que fueron re-utilizados dentro de la aplicacion, se los separo con su logica para poder tener el codigo mas limpio en los componentes principales.

- **Card:** Contiene la estructura de la card utilizada en Cart y BuyOrder
- **CardGrilla:** Contiene la estructura de la grilla de productos que se utiliza en Cart y BuyOrder
- **CardGrillaItems:** Contiene el template de como se renderizan los productos en Cart y BuyOrder
- **DropDownButton:** Contiene la logica y el template de como se renderiza este boton en el Navbar y nos muestras las diferentes categorias por las cuales podemos navegar en la apliacion.
- **Input:** Componente que se encarga de visualizar un input con un template determinado.
- **LoadingSpinner:** Componente encargado de mostrar un spinner de carga mientras se esta ejecutando algo.

## Hooks

Esta aplicacion cuenta por el momento con un solo custom hook generado, el cual es el siguiente:

- **useAsync:** Custom hook creado para poder manejar las llamadas a funciones async, con el fin de poder hacer el codigo reutilizable.

## Contexts

La aplicacion cuenta con un solo context creado, el cual es el siguiente:

- **CartContex:** Esta creado con el fin de poder aislar toda la logica del carrito de compras y que ademas esta informacion pueda ser utilizada en los diferentes componentes de la aplicacion a las cuales de les provee este context.

## Services

La aplicacion cuenta con una serie de servicios los cuales fueron utilizados para conectarse a firebase, traer los productos disponibles, las categorias y poder guardar una orden de compra.
Los services disponibles en la aplicacion son: 

- **Firebase:** Se encuentra la logica para poder conectarnos a Firebase
- **getProducts:** Se encuentra la logica para poder obtener los productos desde Firebase
- **getCategories:** Se encuentra la logica para poder obtener las categorias desde Firebase
- **addBuyOrder:** Se encuentra la logica para poder guardar una orden de compras en Firebase



