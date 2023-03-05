import {Route, Routes} from 'react-router-dom';
import App from './App';
import About from './pages/about/about';
import Art from './pages/art/art';
import Contact from './pages/contact/contact';
import Experience from './pages/experience/experience';
import Home from './pages/home/home';
import Work from './pages/work/work';
import Name from './start/name';
import { Outlet } from 'react-router';

const Routing = () => {
    return (
        <Routes>

                <Route path={'/'} element={<Name/>}/>
                <Route path={'/home'} element={<Home/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/art'} element={<Art/>}/>
                <Route path={'/experience'} element={<Experience/>}/>
                <Route path={'/work'} element={<Work/>}/>
                <Route path={'/contact'} element={<Contact/>}/>

            {/* <Route path={'/'} element={<Home/>}/> */}
            
        </Routes>
    )
}

export default Routing;
