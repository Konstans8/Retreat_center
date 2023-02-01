import { format } from 'date-fns'
import s from './Footer.module.css'

function Footer() {
    return (
        <div className={s.footer}>
            <p className={s.info}>© {format(new Date(), 'yyyy-MM-dd')} rekolekcje-sulejowek.marianie.pl Wszelkie prawa zastrzeżone</p>
        </div>
    )
}

export default Footer