import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'
import BurgerMenu from './BurgerMenu/BurgerMenu';
import s from './Navbar.module.css'
import logo from './MIC.png'




function Navbar() {

    const [menuActive, setMenuActive] = useState(false)

    let activeStyle = {
        color: "#9a7ee6",
    };

    return (
        <div className={s.container}>
            <button className={s.openMenu} onClick={() => setMenuActive(!menuActive)}>
              <RxHamburgerMenu className={s.iconMenu}/>
            </button>
            <img src={logo} alt="logo" className={s.logo}/>
            <nav className={s.navbar}>
                <NavLink to='/' style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>Główna</NavLink>
                <NavLink to='rooms' style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>Pokoje</NavLink>
                <NavLink to='conference-hall' style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>Sale Konferencyjne</NavLink>
                <NavLink to='kitchen' style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>Kuchnia</NavLink>
                <NavLink to='plan' style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>Regulamin</NavLink>
                <NavLink to='contacts' style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>Kontakty</NavLink>
                <NavLink to='galeria' style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>Galeria</NavLink>
                <NavLink className={s.btnNav} to='reservation'>Rezerwacja</NavLink>
            </nav>
            <div className={s.btnContainer}>
                <NavLink className={s.btn} to='reservation'>Rezerwacja</NavLink>
            </div>
            <BurgerMenu active={menuActive} setActive={setMenuActive}/>
        </div>
        
    )
}

export default Navbar