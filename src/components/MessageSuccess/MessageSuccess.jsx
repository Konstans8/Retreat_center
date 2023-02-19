import { NavLink } from 'react-router-dom';
import s from './MessageSuccess.module.css'
import {BsCheck2All} from 'react-icons/bs';



function MessageSuccess() {
    
    return (
        <div className={s.MessageSuccessContainer}>
            <div className={s.display}>
                <p className={s.text}>Wiadomość została wysłana</p>
                <p className={s.text}>W ciągu doby z tobą skontaktują się</p>
                <BsCheck2All className={s.icon}/>
                <p className={s.text}>Dziękujemy za zgłoszenie!</p>
                <NavLink to='/' style={{color: 'white'}}>Wróć na główną</NavLink>
            </div>
        </div>
    )
}

export default MessageSuccess