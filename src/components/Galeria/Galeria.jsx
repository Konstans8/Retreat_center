import Slider from './Slider/Slider'
import s from './Galeria.module.css'


function Galeria() {
    return (
        <div className={s.galeria}>
            <div className={s.bgimg}>
                <div className={s.content}>
                    <h1 className={s.title}>Galeria</h1>
                    <Slider />
                    <p className={s.descr}>W naszym domu rekolekcyjnym możecie korzystać z pokoju wypoczynkowego.</p>
                    <p className={s.descr}>Wygodna kawiarenka, gdzie można wypic kawę lub herbatę</p>
                    <p className={s.descr}>Oratorium wyposazony w multimedia oraz inne sale konferencyjne</p>
                    <p className={s.descr}>Duży refektarz i smaczne jedzenie</p>
                    <p className={s.descr}>Kaplica</p>
                    <p className={s.descr}>Duży parking i pękny teren do spaceru</p>
                </div>
            </div>
        </div>
    )
}

export default Galeria