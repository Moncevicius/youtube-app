import './styles/index.css'
import Logo from "./Logo.jsx";
import Search from "./Search.jsx";
import Sort from "./Sort.jsx";
import User from "./User.jsx";
function Navigation(){
    return (
        <>
            <nav>
                <Logo />
                <Search />
                <Sort />
                <User />
            </nav>
        </>
    )
}

export default Navigation