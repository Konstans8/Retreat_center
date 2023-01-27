
import { useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import s from './Modal.module.css'


function Modal({active, setActive}) {

    const [isChecked, setIsChecked] = useState(false)
    
    function test() {
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
                    <input className={s.modalInput} type="text" name='name' checked={isChecked} onChange={test}/>
                </div>
                <div className={s.formularz}>
                    <p>Telefon</p>
                    <input className={s.modalInput} type="tel" name="phone" id="" />
                </div>
                <div className={s.formularz}>
                    <p>Email</p>
                    <input className={s.modalInput} type="email" name="email" id="" />
                </div>
                <div className={s.formularz}>
                    <p>Uwagi</p>
                    <textarea className={s.textarea}  name="textarea" />
                </div>
                <input className={s.submit} type="submit" value="Wyslij" disabled={!isChecked}/>
            </div>
            
        </div>
    )
}

export default Modal