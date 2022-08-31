# Proyecto Final ECOMMERCE - CODERHOUSE

## FARMARED

Es un simulador de un Ecommerce de productos de Farmacia

La finalidad de la app es tener la funcionalidad para la compra de productos de farmacia, perfumeria y limpieza con filtrado por categorías usando información de un JSON propio llamado asyncMock.

## Mapa de la App

En la App hay una barra de navegación y carrito, (Navbar) donde se visualizaran las categorías de los productos, se puede realizar un filtrado propio de los productos según su categoría usando las rutas. 

ItemListContainer, se alojan las cards de los productos, creadas atreves de los componentes ItemList y Item.
Al seleccionar el boton ver detalle de la card se visualizara el detalle de los productos (nombre, imagen, precio, descripción).
ItemCount (imagen del carrito), cumple con la función de contar la cantidad de elementos que se quieren añadir al carrito de compras.
Para visualizar la lista de los productos que se añadieron al carrito, hay que seleccionar el link "Finalizar compra" o la imagen del carrito. Alli se podran quitar algun producto del carrito o sacar a todos.  
Al seleccionar "Crear Compra" la app se redireccionará a un formulario para que el cliente complete sus datos (nombre, email y teléfono). 
Al hacer click en "Crear Compra" en la app se visualizará un Agradeciemiento por la compra y su correpondiente nro de orden.

## Instalación

- Tener instalado Visual Code y Node.js
- Clonar del repositorio GitHub la siguiente ruta "https://github.com/pablom-coder/react_Js.git" con git cloner en un carpeta de tu maquina
- Abrir Aplicacion Visual Studio
- Abrir carpeta donde esta contenido el proyecto.
- Ejecutar el comando npm install
- Instalar react-router-dom con el comando npm install react-router-dom
- Para ejecutar la aplicación en el navegador ingresar el comando npm start.

## Que se utilizo hasta el momento

- Create-React-App
- React-router-dom

