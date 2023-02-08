import s from './Kitchen.module.css'

function Kitchen() {
    return (
        <div className={s.kitchen}>
            <div className={s.bgimg}>
                <div className={s.content}>
                    <h1 className={s.title}>Kuchnia i Refektarz</h1>
                    <div className={s.descr}>
                        <p>Kuchnia w Domu Rekolekcyjnym jest niezbędną częścią działalności domu i jest centrum przygotowywania posiłków i serwowania posiłków dla gości. Kuchnia wyposażona jest w szereg urządzeń i narzędzi, w tym w piekarniki, grille, płyty grzewcze i jednostki chłodnicze, a także w różnego rodzaju narzędzia kuchenne, naczynia i sztućce.</p>
                        <p>Właściwie prowadzona kuchnia jest niezbędna dla sukcesu domu, ponieważ pozwala zapewnić gościom wysokiej jakości, terminowe posiłki podczas ich pobytu.</p>
                        <p>Aby zachować najwyższe standardy przygotowywania jedzenia i bezpieczeństwa, zatrudnia się profesjonalnych kucharzy, którzy otrzymują szkolenie w sztuce kulinarnej i zarządzaniu kuchnią.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kitchen