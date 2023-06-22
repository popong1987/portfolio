
import { useLocation } from "react-router";
import NavBar from "./navbar/navbar";
import SideBarSocials from "./pages/home/sideBarSocials";
import Routing from "./routing";

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