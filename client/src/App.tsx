import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages
import Home from "./body/home/Home";
import About from "./body/about/About";
import Schedule from "./body/Schedule";
import Classes from "./body/classes/Classes";
import Contact from "./body/Contact";

//Account Management 
import Login from "./body/Account/Login"
import Create_Account from "./body/Account/Create_Account"
import Personal_Account from "./body/Account/Personal_Account";

const App = () => {

    return (
        <BrowserRouter>

        <div id="main_body">

            <Header />

                <Routes>
                    
                    {/*  Front Pages  */}
                    <Route path="/" element={<Home />}> </Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/classes" element={<Classes />}></Route>
                    <Route path="/schedule" element={<Schedule />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>

                    {/* Account Management */}
                    <Route path="/login" element={<Login />}> </Route> 
                    <Route path="/createAccount" element={<Create_Account />}></Route>
                    <Route path="/account" element={<Personal_Account/>}> </Route>
                
                
                </Routes>
        
            <Footer />
        </div>
        </BrowserRouter>
    
    )

}


export default App