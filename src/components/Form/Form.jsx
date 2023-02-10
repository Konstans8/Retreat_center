// import axios from 'axios'
import { useState } from 'react'
import Modal from './Modal/Modal'
import s from './Form.module.css'
// import moment from 'moment'



// console.log(axios)

function Form() {

    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    
    const [dateAsStart, setDateAsStart] = useState(0)
    const [dateAsEnd, setDateAsEnd] = useState(0)

    const [person, setPerson] = useState(0)
    const price = [140, 280, 420, 560, 700, 840, 980, 1120]
    
    const [hall80, setHall80] = useState(0)
    const [hall25, setHall25] = useState(0)
    
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
    
    
    
    const getCalc = (event) => {
        event.preventDefault(Number)
        
        if(days === 1) {
            setResult(person * price[0] + Number(hall80) + Number(hall25))
        } else if(days === 2) {
            setResult(person * price[1] + Number(hall80) + Number(hall25))
        } else if(days === 3) {
            setResult(person * price[2] + Number(hall80) + Number(hall25))
        } else if(days === 4) {
            setResult(person * price[3] + Number(hall80) + Number(hall25))
        } else if(days === 5) {
            setResult(person * price[4] + Number(hall80) + Number(hall25))
        } else if(days === 6) {
            setResult(person * price[5] + Number(hall80) + Number(hall25))
        } else if(days === 7) {
            setResult(person * price[6] + Number(hall80) + Number(hall25))
        } else if(days === 8) {
            setResult(person * price[7] + Number(hall80) + Number(hall25))
        }
    }
    
    return (
        <div className={s.formContainer}>
            <div className={s.formArea}>
                <form className={s.form} action="../../sendmail.php" method='POST' >
                    <h2 className={s.title}>Rezerwacja grup zorganizowanych</h2>      
                    <div className={s.inputsContainer}>
                        <div className={s.dateContainer}>
                            <div>
                                <p className={s.inputsTitle}>Zjazd</p>
                                <input className={s.date} type="date" value={startDate} name='date-start' onChange={handleChangeStart}/>
                            </div>
                            <div>
                                <p className={s.inputsTitle}>Wyjazd</p>
                                <input className={s.date} type="date" value={endDate} name='date-end' onChange={handleChangeEnd}/>
                            </div>
                        </div>
                        <div className={s.personsContainer}>
                            <div>
                                <p className={s.inputsTitle}>Grupa (dorośli + dzieci)</p>
                                <input className={s.persons} placeholder='Ilosc wszystkich osob?' name='persons' onChange={(e) => setPerson(e.target.value)} id='persons'/>
                            </div>
                            <div>
                                <p className={s.inputsTitle}>Dzieci powyżej 6 roku</p>
                                <input className={s.persons} placeholder='Ilosc osob?' name='children over 6 years old'/>
                            </div>
                            <div>
                                <p className={s.inputsTitle}>Dzieci poniżej 6 roku</p>
                                <input className={s.persons} placeholder='Ilosc osob?' name='children under 6 years old'/>
                            </div>
                        </div>
                        <div className={s.checkboxContainer}>
                            <div className={s.checkboxItem}>
                                <p className={s.inputsTitle}>Sala konferencyjna dla 80 osób</p>
                                <input type='checkbox' className={s.check} name='hall for 80 persons' value={(Number(hall80)) ? 0 : 230} onChange={(e) => setHall80(e.target.value)}/>
                            </div>
                            <div className={s.checkboxItem}>
                                <p className={s.inputsTitle}>Sala konferencyjna dla 25 osób</p>
                                <input type='checkbox' className={s.check} name='hall for 25 persons' value={(Number(hall25)) ? 0 : 130} onChange={(e) => setHall25(e.target.value)}/>
                            </div>
                        </div>
                        <div className={s.btnContainer}>
                            <button className={s.btn} onClick={getCalc}>Oblicz koszt pobytu</button>
                        </div>
                    </div>
                    
                    <p className={s.result} id='price' data-editorblocktype="Text" name='RESULTS'>{result} zl</p>

                    <div className={s.checkbox}>
                        <input className={s.checkboxInput} type="checkbox" name="accepting-data" id="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)}/>
                        <span>Wyrażam zgodę na przetwarzanie danych</span>
                    </div>
                    
                    <input className={s.submit} type="button" value="Zostaw zgłoszenie" onClick={() => setModalActive(!modalActive)} disabled={!isChecked}/>
                    
                    <Modal active={modalActive} setActive={setModalActive}/>
                </form>
                
            </div>
        </div>
    )
}

export default Form