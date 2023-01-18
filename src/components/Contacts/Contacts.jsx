
import s from './Contacts.module.css'

function Contacts() {
    return (
        <div className={s.contacts}>
            <div className={s.bgimg}>
                <div className={s.content}>
                    <h1 className={s.title}>Kontakty</h1>
                    <div className={s.info}>
                        <div className={s.data}>
                            <p className={s.mail}>Mail:</p>
                            <a href="mailto:rekolekcje-sulejowek@marianie.pl">rekolekcje-sulejowek@marianie.pl</a>
                            <p className={s.tel}>Telefon:</p>
                            <a href="tel:+48511567230">511 567 230</a>
                        </div>
                        <div className={s.director}>
                            <img src="https://www.marianie.pl/uploads/TsInstitutions/pictures-members/mini_members_101.jpg?v=1663601944" alt="Prist" />
                            <p>Ks. Dariusz Marzewski MIC</p>
                            <span>Dyrektor Domu Rekolekcyjnego</span>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Contacts