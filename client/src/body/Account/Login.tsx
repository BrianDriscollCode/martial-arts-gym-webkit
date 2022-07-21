import React, { useState, useEffect } from "react";

import Sub_Banner from "../home/Sub_Banner";
import Get_Accounts from "../../backendCalls/Get_Accounts";

const Login = () => {

    const [apiResponse, setApiResponse] = useState([]);

    const callAPI = async () => {

        let response = await Get_Accounts.get('/awsDB');
        console.log(response)
        setApiResponse(response.data[0].firstName)
    }

    useEffect(() => {

        callAPI();

    }, [])

    return  (

        <div id="login_page"> 

            <div>

                <Sub_Banner />

            </div>

            <h2 id="login_title"> Member Login </h2> 

            <div id="login_page_wrapper">

                <div id="member_login">

                    
                    <h3 className="login_section_subtitle"> Registered Members </h3>

                    <hr />

                    <p> If you have an account, sign in with your email address </p>
                
                    <div className="login_input_container"> 
                        <span> Username </span>
                        <input />
                    </div>

                    <div className="login_input_container"> 
                        <span> Password </span>
                        <input />
                    </div>

                    <button className="page_button_"> LOGIN </button> 

                </div> 

                <div id="member_go_create_account"> 

                    <h3 className="create_section_subtitle"> New Members </h3>
                    <hr />
                    <p>Creating an account has many benefits: automatic payments, discounts, and more!</p>
                    <button className="page_button_"> CREATE AN ACCOUNT </button> 
                
                </div>

            </div>

        </div>

    )

}

export default Login;