import Item from './Item'
const ItemList = ({producto}) =>{
    return(
        <div className='ListGroup'>
            {producto.map(prod=> <Item key={prod.id}{...prod}/>)}
        </div>
    )
}

export default ItemList