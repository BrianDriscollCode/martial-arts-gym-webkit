import React from "react";
import Top from "./header/Top";
import Banner from "./header/Banner";
import Navigation from "./header/Navigation"


const Header = () => {

    return (

        <header id="header"> 
            <Top />
            <Navigation />
            <Banner />
        
        </header>

    )

}

export default Header;