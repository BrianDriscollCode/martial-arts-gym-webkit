import React, { useState } from "react";
import { BsPhone } from "react-icons/bs";

const Free_Class_Form = () => {

    const [firstName, setFirstName] = useState("Joe");
    const [lastName, setLastName] = useState("Martinez");
    const [email, setEmail] = useState("Joe.Martinez@gmail.com");
    const [phone, setPhone] = useState("520-265-2755");


    return (

        <div id="about_page_form">

            <p> First Name *</p>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <p> Last Name *</p>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <p> Email *</p>
            <input value={email} onChange={(e) => setEmail(e.target.value)}/>
            <p> Primary Phone *</p>
            <input value={phone} onChange={(e) => setPhone(e.target.value)}/>

        </div>

    )

}

export default Free_Class_Form;