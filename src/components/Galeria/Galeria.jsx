import Slider from './Slider/Slider'
import s from './Galeria.module.css'


function Galeria() {
    return (
        <div className={s.galeria}>
            <div className={s.bgimg}>
                <div className={s.content}>
                    <h1 className={s.title}>Galeria</h1>
                    <Slider />
                </div>
            </div>
        </div>
    )
}

export default Galeria