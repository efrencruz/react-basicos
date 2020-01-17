import React from 'react'

const Producto = ({ producto, productos, carrito, agregarProducto }) => {
    const { nombre, precio } = producto;
    
    // Agregar producto al carrito
    const seleccionarProducto = (producto) => {
        agregarProducto([...carrito, producto]);
    }

    // Eliminar producto de carrito
    const eliminarProducto = (producto) => {
        const productos = carrito.filter(prod => prod.id !== producto.id);
        agregarProducto(productos)
    }

    return (
        <div>
            <p>{ nombre }</p>
            <p>${ precio }</p>
            { productos 
            ? <button
                type="button"
                onClick={ () => seleccionarProducto(producto) }
            > Comprar</button> 
            : <button
                type="button"
                onClick={ () => eliminarProducto(producto) }
            > Eliminar</button>}
            
        </div>
    );
}
 
export default Producto;
