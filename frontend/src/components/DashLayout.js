import { Outlet } from 'react-router-dom'
import DashHeader from './DashHeader'
import DashFooter from './DashFooter'

const Home = () => {
    return (
        <>
            <DashHeader />
            <div>
                <Outlet />
            </div>
            <DashFooter />
        </>
    )
}
export default Home