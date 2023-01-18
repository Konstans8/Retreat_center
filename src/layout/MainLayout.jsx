import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import s from './MainLayout.module.css'
import Footer from '../components/Footer/Footer'

function MainLayout() {
    return (
        <div className={s.mainlayout}>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default MainLayout