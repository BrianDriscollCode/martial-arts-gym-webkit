import React from "react"
import { JsxElement } from "typescript";
import Sub_Banner from "../home/Sub_Banner";

const Create_Account = () => {

    

    const print_days_selection = () => {

        let days: Array<JSX.Element> = [];
        for (let i = 1; i <= 31; i++) {

            days[i] = <option value={`${i}`}> {i} </option>;

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
                        <th className="table_cell">
                            <label htmlFor="username"> Username </label>
                            <input id="username_input" />
                        </th>
                    </tr>

                    <tr>
                        <th className="table_cell">
                            <label htmlFor="password"> Password </label>
                            <input id="passowrd_input" />
                        </th>

                    </tr>

                    <tr>
                        <th className="table_cell">
                            <label htmlFor="first_name"> First Name </label>
                            <input id="first_name_input"/>
                        </th>

                    </tr>

                    <tr>
                        <th className="table_cell">
                            <label htmlFor="last_name"> Last Name </label>
                            <input id="last_name_input" />
                        </th>
        
                    </tr>

                    <tr>
                        <th className="table_cell">

                            <label htmlFor="birth_date" id="birth_date_header"> Birth Date </label>

                            <div>
                            <label> Month: </label>
                            <select>
                                <option value="January"> January </option>
                                <option value="February"> February </option>
                                <option value="March"> March </option>
                                <option value="April"> April </option>
                                <option value="May"> May </option>
                                <option value="June"> June </option>
                                <option value="July"> July </option>
                                <option value="August"> August </option>
                                <option value="September"> September </option>
                                <option value="October"> October </option>
                                <option value="November"> November </option>
                                <option value="December"> December </option>
                            </select>

                            <label> Day: </label>
                            <select>

                                {print_days_selection()}

                            </select>
                            

                            <label> Year: </label>
                            <select>
                                
                                {print_years_selection()}
                            
                            </select>

                            </div>

                        </th>
                        
                    </tr>

                    <tr>

                        <th id="table_cell_button">

                            <button className="page_button_"> Submit </button>

                        </th>


                    </tr>

                    </table>

                </form>
                
            </div> 

        </div>

    );

}

export default Create_Account;