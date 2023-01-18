import s from './Halls.module.css'

function Halls() {
    return (
        <div className={s.halls}>
            <div className={s.bgimg}>
                <div className={s.content}>
                    <h1 className={s.title}>Sale konferencyjne</h1>
                    <p className={s.descr}>
                        <p>Dom posiada 3 sale konferencyjne:</p>
                        <p>
                            - 1 sala konferencyjna dla 84 osób, wyposażona w sprzęt audiowizualny,
                            nagłośnienie, studio do aranżowania videokonferencji, ekran projekcyjny,
                            stoły konferencyjne
                        </p>
                        <p>
                            - 2 sale konferencyjne na 25 osób, wyposażone w nagłośnienie, projektor
                            i ekran projekcyjny
                        </p>
                        <p>
                            - wejście dużej sali konferencyjnej wyposażone jest w szatnię oraz
                            chłodziarkę z wodą mineralną butelkowaną.
                        </p>
                    </p>
                </div>    
            </div>
        </div>
    )
}

export default Halls