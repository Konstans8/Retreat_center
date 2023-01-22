import { NavLink } from 'react-router-dom'
import s from './Home.module.css'

function Home() {


    
    return (
        <div className={s.home}>
            <div className={s.bgimg}></div>
            <div className={s.content}>
                <h1 className={s.title}>Mariański Dom Rekolekcyjny w Sulejówku</h1>
                <div>
                    <NavLink className={s.btn} to='reservation'>Rezerwacja</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Home