import Image from './assets/logo.jpg'
import CartWidget from './CartWidget/CartWidget' 

const Navbar = () => {
    return (
       <nav>
        
        <img src={Image} alt ="logo"/>
        <div>
            <button>pestañas</button>
            <button>lifting</button>
            <button>uñas</button>
            <button>cejas</button>
            <button>otros</button>
            <button>turnos</button>
            
        </div>
        <CartWidget/>
       </nav> 
    )
}

export default Navbar