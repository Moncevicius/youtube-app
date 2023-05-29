import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageNotFound from "./pages/Error/Page404.jsx";
import Home from "./pages/Home/index.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navigation from "./components/Navigation/index.jsx";

function App() {

    return (
        <>
            <Navigation />
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path={"*"} element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}

export default App
