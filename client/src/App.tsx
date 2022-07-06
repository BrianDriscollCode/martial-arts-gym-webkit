
import axios from "axios";
import React, { useState, useEffect }from "react";
import Header from "./Header";

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
    
        <div id="main_body">

            <Header />
        
            <h1> title </h1>
            <p> {apiResponse} </p>
            <button onClick={callAPI}> get response </button>
    
        </div>
    
    )
    
    

}


export default App