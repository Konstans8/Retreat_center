import { useState } from 'react'

function MyDateTest() {

    const [firstDate, setFirstDate] = useState('')
    const [secondDate, setSecondDate] = useState('')
    
    const [dateAsNumberOne, setDateAsNumberOne] = useState(0)
    const [dateAsNumberTwo, setDateAsNumberTwo] = useState(0)

    const [result, setResalt] = useState(0)
    
    const [person, setPerson] = useState(0)
    const price = [120, 180, 240, 300, 360, 420]
    
    function handleChangeOne(e) {
        setFirstDate(e.target.value)
        const dateObject = new Date(e.target.value)
        const dateAsNumOne = dateObject.getDate()
        setDateAsNumberOne(dateAsNumOne)
    }
    
    function handleChangeTwo(e) {
        setSecondDate(e.target.value)
        const dateObject = new Date(e.target.value)
        const dateAsNumTwo = dateObject.getDate()
        setDateAsNumberTwo(dateAsNumTwo)
    }
    
    let days = dateAsNumberTwo - dateAsNumberOne
    
    console.log(days)
    
    const getCalc = (event) => {
        event.preventDefault()
        
        if(days === 2) {
            setResalt(person * price[0])
        } else if(days === 3) {
            setResalt(person * price[1])
        } else if(days === 4) {
            setResalt(person * price[2])
        } else if(days === 5) {
            setResalt(person * price[3])
        } else if(days === 6) {
            setResalt(person * price[4])
        } else if(days === 7) {
            setResalt(person * price[5])
        }
    }
    
    console.log(result)
    
    return (
        <div>
            <div>
                <form action="" method=''>
                    <h2>Rezerwacja grup zorganizowanych</h2>      
                    <input type="date" value={firstDate} onChange={handleChangeOne}/>
                    <input type="date" value={secondDate} onChange={handleChangeTwo}/>
                    <input placeholder='Ilosc osob?' id='persons' onChange={(e) => setPerson(e.target.value)}/>
                    <button onClick={getCalc}>Oblicz koszt pobytu</button>
                    
                    <h1>{result} $</h1>
                    <input type="submit" value="Zostaw zgloszenie" />
                </form>
            </div>
        </div>
    )
}

export default MyDateTest