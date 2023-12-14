import { SideBard } from '../components/SideBard'
import { TopBar } from "../components/TopBar"
import { Footer } from "../components/Footer"
import '../../public/css/styles.css'

import { Outlet } from 'react-router-dom'


export const Layaout = () => {
    return (
        <div id="wrapper">
            <SideBard />
            <div id="content-wrapper" >
                <div id="content">
                    <TopBar />
                    <div className="container-fluid">
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                        </div>
                        <Outlet/>
                    </div>
                </div>
                <Footer />
            </div>

        </div>
    )
}
