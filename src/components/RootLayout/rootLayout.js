import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    return(
        <div>
            <NavBar/>
            <main>
                <Outlet/>
            </main>
        </div>

    )
}

export default RootLayout