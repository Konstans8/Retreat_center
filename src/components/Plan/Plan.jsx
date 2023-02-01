import s from './Plan.module.css'

function Plan() {
    return (
        <div className={s.plan}>
            <div className={s.bgimg}>
                <div className={s.content}>
                    <h1 className={s.title}>Regulamin</h1>
                    <ol className={s.descr}>
                        <li>Godziny ciszy: Przestrzegaj ciszy od 22:00 do 6:00.</li>
                        <li>Czystość: Dbaj o czystość swojego pokoju i wspólnych pomieszczeń.</li>
                        <li>Palenie i alkohol: Palenie i spożywanie alkoholu są surowo zabronione na terenie ośrodka.</li>
                        <li>Goście: Nie wolno wpuszczać gości do ośrodka.</li>
                        <li>Jedzenie: Nie wolno przynosić zewnętrznego jedzenia lub napojów do ośrodka. Posiłki są zapewnione.</li>
                        <li>Urządzenia elektroniczne: Ogranicz korzystanie z urządzeń elektronicznych (komórek, laptopów itp.) i nie naruszaj spokojnej atmosfery ośrodka.</li>
                        <li>Mienie: Nie uszkadzaj ani nie usuwaj mienia należącego do ośrodka.</li>
                        <li>Szacunek: Okazuj szacunek dla innych uczestników, personelu i mienia.</li>
                        <li>Sytuacje nagłe: W przypadku sytuacji nagłej niezwłocznie skontaktuj się z personel.</li>
                        <li>Leki: Trzymaj wszystkie leki w oryginalnych opakowaniach i poinformuj personel o specjalnych potrzebach.</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Plan