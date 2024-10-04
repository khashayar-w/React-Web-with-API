import {BrowserRouter,Route,Routes} from "react-router-dom"
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/about";
import Login from "./components/Login";
import Footer from "./components/Footer";
function App() {
    return ( 
        <div className="App">
            <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/> }/>
                    <Route path="/about" element={<AboutUs/>}/>
                    <Route path="*" element={<h1>Nothing found</h1>}/>
                </Routes>
            <Footer/>
            </BrowserRouter>
        </div>
     );
}

export default App;