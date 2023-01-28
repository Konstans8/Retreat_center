import { NavLink } from 'react-router-dom'
import { MdOutlineClose } from 'react-icons/md'
import s from './BurgerMenu.module.css'
import logo from '../MIC.png'
// import { useState } from 'react';

function BurgerMenu({active, setActive}) {

    
    let activeStyle = {
        color: "#9a7ee6",
    };
        
    return (
        <div className={active ? (s.active) : (s.container)}>
            <button className={s.exit} onClick={() => setActive(false)}>
                <MdOutlineClose className={s.iconMenu}/>
            </button>
            <img src={logo} alt="logo" className={s.logo}/> 
            <nav className={s.navbar} onClick={e => e.stopPropagation()}>
                <NavLink to='/' style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                } onClick={() => setActive(false)}>Główna</NavLink>
                <NavLink to='rooms' style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                } onClick={() => setActive(false)}>Pokoje</NavLink>
                <NavLink to='conference-hall' style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                } onClick={() => setActive(false)}>Sale Konferencyjne</NavLink>
                <NavLink to='kitchen' style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                } onClick={() => setActive(false)}>Kuchnia</NavLink>
                <NavLink to='plan' style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                } onClick={() => setActive(false)}>Regulamin</NavLink>
                <NavLink to='contacts' style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                } onClick={() => setActive(false)}>Kontakty</NavLink>
                <NavLink to='galeria' style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                } onClick={() => setActive(false)}>Galeria</NavLink>
                <NavLink className={s.btnNav} to='reservation' onClick={() => setActive(false)}>Rezerwacja</NavLink>
            </nav>
        </div>
    )
}

export default BurgerMenu