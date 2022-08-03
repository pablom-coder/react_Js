# Proyecto final ECOMMERCE, curso de REACT JS en CODERHOUSE.

## FARMARED

Es un simulador de un Ecommerce de productos de Farmacia

La idea general de esta aplicación es crear un Sistema de E-Commerce para compra de productos de farmacia, perfumeria y limpieza con filtrado por categorías usando información de un JSON propio llamado asyncMock

## Mapa de la App

En el proyecto encontraras las categorías de los productos representados en la barra de navegación para así hacer un filtrado propio de los productos según su categoría usando las rutas "/category/:categoryId". 

Después se encuentra el componente ItemListContainer, donde están guardados las cartas de los productos, creadas de forma dinámica atreves de los componentes ItemList y Item, en estas encontraras el botón de "ver detalles", el cual de dirigirá hacia la ruta "/detail/:productId" donde encontraras los detalles del producto seleccionado y cuenta con un componente ItemCount, el cual se encarga de contar la cantidad de elementos que quieres agregar a tu carrito de compras. 


## Instalación

- Tener instalado Visual Code y Node.js
- Clonar la siguiente ruta "https://github.com/pablom-coder/react_Js.git" con git cloner en un carpeta de tu maquina
- Abrir Aplicacion Visual Studio
- Abrir carpeta donde esta contenido el proyecto.

## Que se utilizo hasta el momento

- Create-React-App
- React-router-dom

