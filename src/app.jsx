
import { useLocation } from "react-router";
import NavBar from "./navbar/navbar";
import SideBarSocials from "./pages/home/sideBarSocials";
import Routing from "./routing";
import Name from "./start/name";

const App = () => {
    const location = useLocation();
    return (
        <>
            {location.pathname != "/" && <NavBar/>}
            <Routing/>
        </>
    )
}

export default App;