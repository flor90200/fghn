import React from 'react'
const Item = ({producto}) => {
    return(
        <div className="producto">
            <img src={producto.img} />
      
        <div>
        <h4>{producto.nombre}</h4>
        <p>Precio: ${producto.precio}</p>
        <p>Producto: {producto.categoria}</p>
        <a className="ver-mas" href={`/item/${producto.id}`}>Ver-mas </a>
        </div> 
        
         </div>
    )
}

export default Item