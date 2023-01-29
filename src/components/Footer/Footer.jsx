import s from './Footer.module.css'

function Footer() {
    return (
        <div className={s.footer}>
            <p className={s.info}>© 2023 rekolekcje-sulejowek.marianie.pl Wszelkie prawa zastrzeżone</p>
        </div>
    )
}

export default Footer