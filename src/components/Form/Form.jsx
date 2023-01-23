// import axios from 'axios'
import { useState } from 'react'
import Modal from './Modal/Modal'
import s from './Form.module.css'
// import moment from 'moment'



// console.log(axios)

function Form(props) {

    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    
    const [dateAsStart, setDateAsStart] = useState(0)
    const [dateAsEnd, setDateAsEnd] = useState(0)

    const [person, setPerson] = useState(0)
    const price = [120, 180, 240, 300, 360, 420]
    const [result, setResult] = useState(0)
    
    const [modalActive, setModalActive] = useState(false)
    
    const [isChecked, setIsChecked] = useState(false);
    

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
    
    let days
    
    if(dateAsStart === 29 && dateAsEnd === 1) {
        days = 32 - dateAsStart
    } else if(dateAsStart === 30) {
        days = 0 + dateAsEnd
    } else if(dateAsStart === 31) {
        days = 1 + dateAsEnd
    } else {
        days = dateAsEnd - dateAsStart
    }
    
    
    
    console.log(dateAsEnd)
    console.log(dateAsStart)
    
    console.log(days)
    
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
                <form action="../../../send.php" method='POST' >
                    <h2 className={s.title}>Rezerwacja grup zorganizowanych</h2>      
                    <div className={s.inputsContainer}>
                        <div>
                            <p className={s.inputsTitle}>Zjazd</p>
                            <input type="date" value={startDate} name='date-start' onChange={handleChangeStart}/>
                        </div>
                        <div>
                            <p className={s.inputsTitle}>Wyjazd</p>
                            <input type="date" value={endDate} name='date-end' onChange={handleChangeEnd}/>
                        </div>
                        <div>
                            <p className={s.inputsTitle}>Grupa</p>
                            <input className={s.placeholder} placeholder='Ilosc osob?' name='persons' onChange={(e) => setPerson(e.target.value)} id='persons'/>
                        </div>
                        <div>
                            <button className={s.btn} onClick={getCalc}>Oblicz koszt pobytu</button>
                        </div>
                    </div>
                    
                    <p className={s.result} id='price'>{result} zl</p>

                    <div className={s.checkbox}>
                        <input className={s.checkboxInput} type="checkbox" name="checkbox" id="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)}/>
                        <span>Wyrazam zgode na prztwarzanie danych</span>
                    </div>
                    
                    <input className={s.submit} type="button" value="Zostaw zgloszenie" onClick={() => setModalActive(true)} disabled={!isChecked}/>
                    
                    <Modal active={modalActive} setActive={setModalActive}/>
                </form>
                
            </div>
        </div>
    )
}

export default Form