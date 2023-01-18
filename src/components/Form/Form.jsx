import { useState } from 'react'
import s from './Form.module.css'


function Form() {

    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    
    const [dateAsStart, setDateAsStart] = useState(0)
    const [dateAsEnd, setDateAsEnd] = useState(0)

    const [person, setPerson] = useState(0)
    const price = [120, 180, 240, 300, 360, 420]
    const [result, setResult] = useState(0)
    
    function handleChangeStart(e) {
        setStartDate(e.target.value)
        const dateObject = new Date(e.target.value)
        const dateAsStart = dateObject.getDate()
        setDateAsStart(dateAsStart)
    }
    
    function handleChangeEnd(e) {
        setEndDate(e.target.value)
        const dateObject = new Date(e.target.value)
        const dateAsEnd = dateObject.getDate()
        setDateAsEnd(dateAsEnd)
    }
    
    let days = dateAsEnd - dateAsStart
    
    const getCalc = (event) => {
        event.preventDefault()
        
        if(days === 2) {
            setResult(person * price[0])
        } else if(days === 3) {
            setResult(person * price[1])
        } else if(days === 4) {
            setResult(person * price[2])
        } else if(days === 5) {
            setResult(person * price[3])
        } else if(days === 6) {
            setResult(person * price[4])
        } else if(days === 7) {
            setResult(person * price[5])
        }
    }
    

    
    return (
        <div className={s.formContainer}>
            <div className={s.form}>
                <form action="" method='POST' onSubmit={getCalc}>
                    <h2 className={s.title}>Rezerwacja grup zorganizowanych</h2>      
                    <div className={s.inputsContainer}>
                        <div>
                            <p className={s.inputsTitle}>Zjazd</p>
                            <input type="date" value={startDate} onChange={handleChangeStart}/>
                        </div>
                        <div>
                            <p className={s.inputsTitle}>Wyjazd</p>
                            <input type="date" value={endDate} onChange={handleChangeEnd}/>
                        </div>
                        <div>
                            <p className={s.inputsTitle}>Grupa</p>
                            <input className={s.placeholder} placeholder='Ilosc osob?' onChange={(e) => setPerson(e.target.value)} id='persons'/>
                        </div>
                        <div>
                            <button className={s.btn} onClick={getCalc}>Oblicz koszt pobytu</button>
                        </div>
                    </div>
                    
                    <p className={s.result}>{result} $</p>

                    <input className={s.submit} type="submit" value="Zostaw zgloszenie" />
                </form>
            </div>
        </div>
    )
}

export default Form