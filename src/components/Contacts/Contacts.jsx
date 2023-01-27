
import s from './Contacts.module.css'

function Contacts() {
    return (
        <div className={s.contacts}>
            <div className={s.bgimg}>
                <div className={s.content}>
                    <h1 className={s.title}>Kontakty</h1>
                    <div className={s.info}>
                        <div className={s.data}>
                            <div className={s.address}>
                                <p>DANE ADRESOWE:</p>
                                <p>Dom Rekolekcyjny Zgromadzenia Ksiezy Marianow</p>
                                <p>05-070 Sulejówek </p>
                                <p>ul. Mariańska 9</p>
                            </div>
                            <p className={s.mail}>Mail:</p>
                            <a href="mailto:rekolekcje-sulejowek@marianie.pl">rekolekcje-sulejowek@marianie.pl</a>
                            <p className={s.tel}>Telefon:</p>
                            <a href="tel:+48511567230">511 567 230</a>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Contacts