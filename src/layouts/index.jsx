import { SideBard } from '../components/estructura/SideBard'
import { TopBar } from "../components/estructura/TopBar"
import { Footer } from "../components/estructura/Footer"
import '../../public/css/styles.css'

import { Outlet } from 'react-router-dom'


export const Layaout = () => {
    return (
        <div id="wrapper">
            <div className='side_Bar'>
                <SideBard/>
            </div>
            <div id="content-wrapper" >
                <div id="content">
                    <TopBar />
                    <div className="container-fluid">
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">RE-HOGAR - Dashboard</h1>
                        </div>
                        <Outlet/>
                    </div>
                </div>
                <Footer />
            </div>

        </div>
    )
}
