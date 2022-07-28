import React, { useState, useEffect } from "react";

import Sub_Banner from "../home/Sub_Banner";
import axios from "axios";
import { Link } from "react-router-dom" 

import { connect } from "react-redux";
import { setCurrentAccount } from "../../actions"

const Login = ( { currentAccount, setCurrentAccount }: any ) => {

    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const [showSuccessText, setShowSuccessText] = useState(false);
    const [showFailureText, setShowFailureText] = useState(false);
    const [validationText, setValidationText] = useState('Success');

    const login = async (passedUsername: string, passedPassword: string) => {
        console.log('login called');
        let local_account_variable: any; 

        let response = await axios.post("http://localhost:9000/login", {

             data: {
                username: passedUsername,
                password: passedPassword
             }

        }) 
        .then(res => {
            local_account_variable = res

            if (local_account_variable.data.length > 0) {
                setCurrentAccount("CHANGE_ACCOUNT", res)
                setShowSuccessText(true);
                setShowFailureText(false);
            } else {
                setShowSuccessText(false);
                setShowFailureText(true);
            }
        })
        
    }

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

                    <span 
                        style={{
                            opacity: showSuccessText ? '1' : '0',
                            display: showSuccessText ? 'inline' : 'none'
                        }}
                        className="success_text_"
                    > Success </span> 

                    <span style={{
                        opacity: showFailureText ? '1' : '0',
                        display: showFailureText ? 'inline' : 'none'
                        }}
                        className="validation_text_"
                    > No matching username or password </span> 

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