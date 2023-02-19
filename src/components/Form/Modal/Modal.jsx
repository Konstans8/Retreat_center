import { useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
// import { NavLink } from 'react-router-dom'
import s from './Modal.module.css'
// MdBuildCircle


function Modal({active, setActive}) {

    const [isChecked, setIsChecked] = useState(false)
    
    function NotChecked() {
        return isChecked ? 'Loading...' : setIsChecked(!isChecked)
    }


    return (
        <div className={active ? s.modal : s.notmodal} onClick={() => setActive(!active)}>
            <div className={s.content} onClick={e => e.stopPropagation()}>
                <button className={s.exit} onClick={() => setActive(!active)} disabled={!active}>
                    <MdOutlineClose className={s.exit}/>
                </button>
                <p className={s.title}>Wypelnij formularz</p>
                <div className={s.formularz}>
                    <p>Imie</p>
                    <input className={s.modalInput} type="text" name='name' checked={isChecked} onChange={NotChecked}/>
                </div>
                <div className={s.formularz}>
                    <p>Telefon</p>
                    <input className={s.modalInput} type="tel" name="phone" id="" checked={isChecked} onChange={NotChecked}/>
                </div>
                <div className={s.formularz}>
                    <p>Email</p>
                    <input className={s.modalInput} type="email" name="email" id="" checked={isChecked} onChange={NotChecked}/>
                </div>
                <div className={s.formularz}>
                    <p>Uwagi</p>
                    <textarea className={s.textarea}  name="message" />
                </div>
                <input className={s.submit} type="submit" value="Wyslij" disabled={!isChecked}/>
                
                {/* <div>
                    <MdBuildCircle className={s.build}/>
                </div>
                <p className={s.titleBuild}>Strona w budowie</p>
                <p className={s.titleBuild}>Przepraszamy</p> */}
                {/* <NavLink to='../contacts'>Napisz maila w sprawie rezerwacji</NavLink> */}
                {/* <a href="mailto:rekolekcje-sulejowek@marianie.pl">Napisz maila w sprawie rezerwacji</a> */}
            </div>
            
        </div>
    )
}

export default Modal