import axios from "axios";
import React, { useState } from "react"
import { Link } from "react-router-dom"
import Sub_Banner from "../home/Sub_Banner";

const Create_Account = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName]  = useState("");
    
    //pieces of the birthdate
    const [birthDay, setBirthDay] = useState("01");
    const [birthMonth, setBirthMonth] = useState("01");
    const [birthYear, setBirthYear] = useState("1940");

    //whole birthdate
    const [birthDate, setBirthDate] = useState("1940-01-01");

    //form validation
    const [showUsernameValidationText, setShowUsernameValidationText] = useState(false);
    const [usernameValidationText, setUsernameValidationText] = useState("Must be longer than 2 characters")

    const [showPasswordValidationText, setShowPasswordValidationText] = useState(false);
    const [showFirstNameValidationText, setShowFirstNameValidationText] = useState(false);
    const [showLastNameValidationText, setShowLastNameValidationText] = useState(false);


    //submit validation
    const [accountSubmitted, setAccountSubmitted] = useState(false);

    const handleChange = (e: any, statePicker: string, dateSetter?: string) => {

        switch(statePicker) {
            case "username":
                setUsername(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
            case "firstname": 
                setFirstName(e.target.value);
                break;
            case "lastname":
                setLastName(e.target.value);
                break;
            case "birthdate":
                if (dateSetter === "day") {

                    setBirthDay(e.target.value)
                    setBirthDate(`${birthYear}-${birthMonth}-${e.target.value}`);

                } else if (dateSetter === "month") {

                    setBirthMonth(e.target.value)
                    setBirthDate(`${birthYear}-${e.target.value}-${birthDay}`);

                } else {

                    setBirthYear(e.target.value)
                    setBirthDate(`${e.target.value}-${birthMonth}-${birthDay}`);

                }

                break;
        }

    }

    //This function (create_account) calls these functions:
    // 1. validate_password - puts password through series of regular expression checks
    // 2. validate_form - puts username, firstname, and lastname through length checks
    // 3. submit_create_account_request - submits nested post requests. 
    //      A) First post request checks to see if there is a matching username
    //      B) Second post request posts the new account to database if there is
    //         no matching username from the first post request

    const create_account = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        e.preventDefault();

        let passReqFulfilled: boolean =  validate_password(password);

        //Validate form params accepts form string and submits a "type" for the function logic
        let userReqFulfilled: boolean = validate_form(username, "username");
        let firstNameReqFulfilled: boolean = validate_form(firstName, "firstName");
        let lastNameReqFulfilled: boolean = validate_form(lastName, "lastName");

        if (
                userReqFulfilled
                && passReqFulfilled
                && firstNameReqFulfilled
                && lastNameReqFulfilled
            ) 
        {
            submit_create_account_request();

        } else {

            console.log("form not filled out")
            setAccountSubmitted(false)
        
        }


    }

    const submit_create_account_request = async () => {

        let single_account: any;

        console.log('get request run');

            let comparisonResponse = await axios.post("http://localhost:9000/createAccount/compare", {

                data: {
                    username: username,
                }

            })
            .then(res => {

                console.log(res.data, " -create account response")
                single_account = res;
            
            })
            .then(() => {

                console.log('post request run');
                if (single_account.data.length < 1) {
                    let response = axios.post("http://localhost:9000/createAccount", {

                        data: {

                            username: username,
                            password: password,
                            firstname: firstName,
                            lastname: lastName,
                            birthdate: birthDate,

                        }

                    })

                    console.log("account posted")
                    setAccountSubmitted(true)
                }
                else {

                    console.log("account not posted due to duplicate username")
                    setUsernameValidationText("Username already exists");
                    setShowUsernameValidationText(true);
                    setAccountSubmitted(false)

                }
            })
    }

    const validate_password = (password:string): boolean => {
        
        //test lowercase letters
        let checkLowercaseREGEX: RegExp = /[a-z]/;
        //test uppercase letters
        let checkUppercaseREGEX: RegExp = /[A-Z]/;
        //test digits
        let checkDigitsREGEX: RegExp = /\d/;
        //test special characters
        let checkSpecialCharREGEX: RegExp = /[!@#$%^&*()+=/\<>`~?,.-]/;

        if (
            checkLowercaseREGEX.test(password)
            && checkUppercaseREGEX.test(password)
            && checkDigitsREGEX.test(password)
            && checkSpecialCharREGEX.test(password)
        ) 
            {
                setShowPasswordValidationText(false)
                return true
            } 
        else 
            {
                setShowPasswordValidationText(true)
                return false
            }

    }

    const validate_form = (input:string, type:string): boolean => {

        if (type === "username") {
                
            if (input.length >= 2) {

                setShowUsernameValidationText(false)
                return true;

            } else {

                setShowUsernameValidationText(true)
                setUsernameValidationText("Must be longer than 2 characters")
                return false;
           
            }
           
        } else if (type === "firstName") {

            if (input.length >= 2) {

                setShowFirstNameValidationText(false)
                return true;

            } else {

                setShowFirstNameValidationText(true)
                return false;
           
            }

        } else if (type === "lastName") {

            if (input.length >= 2) {

                setShowLastNameValidationText(false)
                return true;

            } else {

                setShowLastNameValidationText(true)
                return false;
           
            }

        } else {

            return false;
        }
    }

    const print_days_selection = () => {

        let days: Array<JSX.Element> = [];
        for (let i = 1; i <= 31; i++) {

            days[i] = <option value={(i < 10) ? `0${i}` : `${i}`}> {i} </option>;

        }

        return days;

    }

    const print_years_selection = () => {

        let years: Array<JSX.Element> = [];
        let minimumAge = 14;

        for (let i = 1940; i <= new Date().getFullYear() - minimumAge; i++) {

            years[i] = <option value={`${i}`}> {i} </option>

        }

        return years;

    }

    return (

        <div id="create_account_container"> 

            <div> 

                <Sub_Banner title="Create Account" />

            </div>

            <div id="create_account_title_wrapper">

                <h2 id="login_title"> Fill out the form: </h2>

            </div>

            <div id="account_form_container">

                <form>
                    <table>

                    <tr>
                        <th>
                            <Link to="/login">
                                <button 
                                className="page_button_"
                                style={{ display: accountSubmitted ? 'inline' : 'none'}}
                            > 
                                Back to Login
                                </button>
                            </Link>
                        </th>
                    </tr>


                    <tr>
                        <th className="table_cell">
                            <label htmlFor="username"> Username </label>
                            <input id="username_input" onChange={(e) => handleChange(e, "username")} />
                        </th>
                        <span 
                            style={ {opacity: showUsernameValidationText ? '1' : '0' }}
                            className="validation_text_"
                        > 
                            {usernameValidationText}
                        </span>
                    </tr>

                    <tr>
                        <th className="table_cell">
                            <label htmlFor="password"> Password </label>
                            <input id="passowrd_input" type="password" onChange={(e) => handleChange(e, "password")} />
                        </th>
                        <span 
                            style={ {opacity: showPasswordValidationText ? '1' : '0' }}
                            className="validation_text_"
                        > 
                            include upper and lowercase, number, and special character 
                        </span>
                    </tr>

                    <tr>
                        <th className="table_cell">
                            <label htmlFor="first_name"> First Name </label>
                            <input id="first_name_input" onChange={(e) => handleChange(e, "firstname")}/>
                        </th>
                        <span 
                            style={ {opacity: showFirstNameValidationText ? '1' : '0' }}
                            className="validation_text_"
                        > 
                            Must be longer than 2 characters
                        </span>
                    </tr>

                    <tr>
                        <th className="table_cell">
                            <label htmlFor="last_name"> Last Name </label>
                            <input id="last_name_input" onChange={(e) => handleChange(e, "lastname")}/>
                        </th>
                        <span 
                            style={ {opacity: showLastNameValidationText ? '1' : '0' }}
                            className="validation_text_"
                        > 
                            Must be longer than 2 characters
                        </span>
                    </tr>

                    <tr>
                        <th className="table_cell">

                            <label htmlFor="birth_date" id="birth_date_header"> Birth Date </label>

                            <div>
                                <label> Month: </label>
                                <select onChange={(e) => handleChange(e, "birthdate", "month")}>
                                    <option value="01"> January </option>
                                    <option value="02"> February </option>
                                    <option value="03"> March </option>
                                    <option value="04"> April </option>
                                    <option value="05"> May </option>
                                    <option value="06"> June </option>
                                    <option value="07"> July </option>
                                    <option value="08"> August </option>
                                    <option value="09"> September </option>
                                    <option value="10"> October </option>
                                    <option value="11"> November </option>
                                    <option value="12"> December </option>
                                </select>

                                <label> Day: </label>
                                <select onChange={(e) => handleChange(e, "birthdate", "day")}>

                                    {print_days_selection()}

                                </select>
                                

                                <label> Year: </label>
                                <select onChange={(e) => handleChange(e, "birthdate", "year")}>
                                    
                                    {print_years_selection()}
                                
                                </select>

                            </div>

                        </th>
                        
                    </tr>

                    <tr>

                        <th id="table_cell_button">

                            <button 
                                className="page_button_"
                                onClick={(e) => create_account(e)}
                            > 
                                Submit 
                            </button>

                        </th>

                    </tr>

                    <tr>

                        <th>
                            <span 
                                className="success_text_"
                                style={{opacity: accountSubmitted ? '1' : '0'}}
                            > 
                            Success </span>
                        </th>

                    </tr>

                    </table>

                </form>
                
            </div> 

        </div>

    );

}

export default Create_Account;
