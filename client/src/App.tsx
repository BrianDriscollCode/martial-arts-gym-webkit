
import axios from "axios";
import React, { useState, useEffect }from "react";
import Header from "./Header";
import { HashRouter, Route, Routes } from "react-router-dom";

//pages
import Home from "./body/Home";
import About from "./body/About";
import Schedule from "./body/Schedule";
import Classes from "./body/Classes";
import Contact from "./body/Contact";

import Get_Accounts from "./backendCalls/Get_Accounts";

const App = () => {

    const [apiResponse, setApiResponse] = useState([]);

    const callAPI = async () => {

        let response = await Get_Accounts.get('/awsDB');
        console.log(response)
        setApiResponse(response.data[0].firstName)
    }

    useEffect(() => {

        callAPI();

    }, [])

    return (
        <HashRouter>
        <div id="main_body">

            <Header />

            
                <Routes>
                    
                    <Route path="/" element={<Home />}> </Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/classes" element={<Classes />}></Route>
                    <Route path="/schedule" element={<Schedule />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                

                </Routes>
            


            {/* <h1> title </h1>
            <p> {apiResponse} </p>
            <button onClick={callAPI}> get response </button> */}
    
        </div>
        </HashRouter>
    
    )
    
    

}


export default App