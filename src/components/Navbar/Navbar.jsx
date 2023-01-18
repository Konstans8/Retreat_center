import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
import logo from './MIC.png'

function Navbar() {

    let activeStyle = {
        color: "#9a7ee6",
    };

    return (
        <div className={s.container}>
            <img src={logo} alt="logo" className={s.logo}/>
            <nav className={s.navbar}>
                <NavLink to='/' style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>Glowna</NavLink>
                <NavLink to='rooms' style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>Pokoje</NavLink>
                <NavLink to='conference-hall' style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>Sale Konferencyjne</NavLink>
                <NavLink to='kitchen' style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>Kuchnia</NavLink>
                <NavLink to='contacts' style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>Kontakty</NavLink>
            </nav>
            <div className={s.btnContainer}>
                <NavLink className={s.btn} to='reservation'>Rezerwacja</NavLink>
            </div>
        </div>
    )
}

export default Navbar