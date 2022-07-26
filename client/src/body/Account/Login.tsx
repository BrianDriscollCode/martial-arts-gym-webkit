import React, { useState, useEffect } from "react";

import Sub_Banner from "../home/Sub_Banner";
import Get_Accounts from "../../backendCalls/Get_Accounts";
import axios from "axios";
import { Link } from "react-router-dom" 

import { connect } from "react-redux";
import { setCurrentAccount } from "../../actions"

const Login = ( { currentAccount, setCurrentAccount }: any ) => {

    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const login = async (passedUsername: string, passedPassword: string) => {
        console.log('login called');


        let response = await axios.post("http://localhost:9000/login", {

             data: {
                username: passedUsername,
                password: passedPassword
             }

        }) 
        .then(res => {
            setCurrentAccount("CHANGE_ACCOUNT", res)
        })

    }

    console.log(currentAccount)

    return  (

        <div id="login_page"> 

            <div>

                <Sub_Banner title="Login" />

            </div>

            <h2 id="login_title"> Member Login </h2> 

            <div id="login_page_wrapper">

                <div id="member_login">

                    
                    <h3 className="login_section_subtitle"> Registered Members </h3>

                    <hr />

                    <p> If you have an account, sign in with your email address </p>
                
                    <div className="login_input_container"> 
                        <span> Username </span>
                        <input onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    <div className="login_input_container"> 
                        <span> Password </span>
                        <input onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <button 
                        className="page_button_" 
                        onClick={() => login(username, password)} 
                    > 
                        LOGIN 
                    </button> 

                </div> 

                <div id="member_go_create_account"> 

                    <h3 className="create_section_subtitle"> New Members </h3>
                    <hr />
                    <p>Creating an account has many benefits: automatic payments, discounts, and more!</p>
                    <Link to="/createAccount"><button className="page_button_"> CREATE AN ACCOUNT </button> </Link>
                
                </div>

            </div>

        </div>

    )

}

const mapStateToProps = (state: any) => {

    return { currentAccount: state.currentAccount }

}

export default connect(mapStateToProps, { setCurrentAccount })(Login);

// const callAPI = async () => {
    //     console.log('run api')
    //     let responsetest = await Get_Accounts.get('/awsDB');
    //     console.log(responsetest, "-client response **GET**");
    // }

    // useEffect(() => {

    //     callAPI();

    // }, [])