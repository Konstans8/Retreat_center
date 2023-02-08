import s from './Plan.module.css'

function Plan() {
    return (
        <div className={s.plan}>
            <div className={s.bgimg}>
                <div className={s.content}>
                    <h1 className={s.title}>Regulamin</h1>
                    <ol className={s.descr}>
                        <li>Szanuj godziny ciszy: Od 22:00 do 7:00 goście są proszeni o zachowanie spokoju i szacunku w pomieszczeniach wspólnych i sypialniach.</li>
                        <li>Zakaz palenia i używania narkotyków: Palenie i używanie narkotyków, w tym marihuany, jest zabronione na terenie posesji.</li>
                        <li>Zachowaj czystość: Goście są odpowiedzialni za utrzymanie czystości swoich sypialni i wspólnych przestrzeni.</li>
                        <li>Goście: Goście nie mogą zapraszać gości ani bawić gości bez wcześniejszej zgody ze strony personelu ośrodka wypoczynkowego.</li>
                        <li>Picie alkoholu: Alkohol może być spożywany tylko w wyznaczonych obszarach i nie może być przynoszony do sypialni.</li>
                        <li>Jedzenie: Goście są proszeni aby nie przynosić jedzenia do pokoi, gdyby posiadali wlasne jedzenie, nalezy po sobie posprzatać.</li>
                        <li>Bezpieczeństwo pożarowe: Goście muszą przestrzegać wszystkich zasad bezpieczeństwa pożarowego, w tym odpowiedzialnego używania kominków i świec i zgłaszania wszelkich usterek.</li>
                        <li>Uszkodzenie własności: Goście są odpowiedzialni za jakiekolwiek uszkodzenia, jakie spowodują na własności i mogą być obciążeni kosztami napraw lub wymiany.</li>
                        <li>Szacunek: Okazuj szacunek dla innych uczestników, personelu i mienia.</li>
                        <li>Zameldowanie i wymeldowanie: Goście muszą przestrzegać wyznaczonych godzin zameldowania i wymeldowania i powiadamiać personel ośrodka wypoczynkowego o jakichkolwiek zmianach z wyprzedzeniem.</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Plan