import Slider from './Slider/Slider'
import s from './Galeria.module.css'


function Galeria() {
    return (
        <div className={s.galeria}>
            <div className={s.bgimg}>
                <div className={s.content}>
                    <h1 className={s.title}>Galeria</h1>
                    <Slider />
                    <p className={s.descr}>W naszym domu rekolekcyjnym mozecie korzystac z pokoju wypoczynkowego.</p>
                    <p className={s.descr}>Wygodna kawiarenka, gdzie mozecie wypic kawe lub herbate</p>
                    <p className={s.descr}>Oratorium wyposazony w multimedia oraz inne sale konferencyjne</p>
                    <p className={s.descr}>Duzy refektarz i smaczne jedzenie</p>
                    <p className={s.descr}>Kaplica</p>
                    <p className={s.descr}>Duzy parking i pekny teren do spaceru</p>
                </div>
            </div>
        </div>
    )
}

export default Galeria