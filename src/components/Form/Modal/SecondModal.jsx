
import s from './Modal.module.css'

function SecondModal({end, setEnd}) {
    return (
        <div className={end ? s.finish : s.notfinish} onClick={() => setEnd(false)}>
            <div className={s.thanks} onClick={e => e.stopPropagation()}>
                <p className={s.message}>
                    Twoja rezerwacja w toku. Oczekuj na odpowiedz.
                </p>
                <p>Dziekuje za rezerwacje</p>
                <p>Wszystkiego dobrego!</p>
            </div>
            
        </div>
    )
}

export default SecondModal