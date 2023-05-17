
import Image from './assets/logo.jpg'
import CartWidget from './ItemListContainer/CartWidget'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
    return (
       <nav className='Navbar'>
        <Link to='/'></Link>
        <img src={Image} alt ="logo"/>
        <div className='categoria'>
            <NavLink to= {'/category/celular'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>celulares </NavLink>
            <NavLink to= {"/category/tablet"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tablet</NavLink>
            <NavLink to= {"/category/notebook"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Notebooks</NavLink>
        </div>
        <CartWidget/>
       </nav> 
    )
}

export default Navbar