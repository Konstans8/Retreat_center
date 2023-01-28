import s from './Footer.module.css'

function Footer() {
    return (
        <div className={s.footer}>
            <p className={s.info}>© 2002-2023 marianie.pl Wszelkie prawa zastrzeżone</p>
        </div>
    )
}

export default Footer