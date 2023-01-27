// import { useState, useEffect } from 'react'
import s from './Home.module.css'

function Home(props) {

    // const [data, setData] = useState(null)
  
    // useEffect(() => {
    //     fetch('/home')
    //     .then(response => response.json())
    //     .then(data => setData(data.json()))
    // })
    
    return (
        <div className={s.home}>
            <div className={s.bgimg}></div>
            <div className={s.content}>
                <h1 className={s.title}>Dom Rekolekcyjny Zgromadzenia Księży Marianów w Sulejówku</h1>
                <p className={s.descr}>Dedykowany Czcigodnemu Słudze Bożemu o. Kazimierzowi Wyszyńskiemu</p>
            </div>
        </div>
    )
}

export default Home