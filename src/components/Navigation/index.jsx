import './styles/index.css'
import Logo from "./Logo.jsx";
import Search from "./Search.jsx";
import Sort from "./Sort.jsx";
import User from "./User.jsx";
function Navigation(){
    return (
        <header>
            <nav>
                <Logo />
                <Search />
                <Sort />
                <User />
            </nav>
        </header>
    )
}

export default Navigation