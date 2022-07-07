import React from "react";
import { Link } from "react-router-dom"

const Navigation = () => {

    return (

        <div id="navigation">

            <div id="navigation_wrapper">

                <div id="logo_container">
                    <img src="main_logo.png" width="75" height="auto" />
                </div> 

                <div id="navigation_list">
                    
                    <Link to="/"><div className="nav_link"> <a> HOME </a> </div></Link>
                    <Link to="/about"><div className="nav_link"> <a> ABOUT </a> </div></Link>
                    <Link to="/classes"><div className="nav_link"> <a> CLASSES </a> </div></Link>
                    <Link to="/schedule"><div className="nav_link"> <a> SCHEDULE </a> </div></Link>
                    <Link to="/contact"><div className="nav_link"> <a> CONTACT </a> </div></Link>
                    <Link to="/about"></Link><div 
                        id="free_pass_button"
                    > 
                        <a> GET A FREE PASS </a> 
                    </div>


                </div>


            </div>
            
        </div>

    )

}

export default Navigation