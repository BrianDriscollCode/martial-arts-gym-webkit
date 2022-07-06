import React from "react";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa"

const Top = () => {

    return (

        <div id="top_section">

            <div id="top_wrapper">

                <div id="top_left"> 

                    <div className="top_info_container">
                        <p> Address: </p>
                        <p className="top_info"> 908 Pearl St. La Jolla, CA 92037 </p>
                    </div>

                    <div className="top_info_container">
                        <p> Call: </p>
                        <p className="top_info"> (619) 252-5678 </p>
                    </div>

                    <div className="top_info_container">
                        <p> Email Address: </p>
                        <p className="top_info"> rafael@lajollajiujitsu.com </p>
                    </div>
                
                </div>

                <div id="top_right">

                    <FaFacebookSquare 
                        className="social_links" 
                        size={18}
                    />
                    <FaTwitter 
                        className="social_links" 
                        size={18}
                    />
                    <FaInstagram 
                        className="social_links" 
                        size={18}
                    />


                </div>

            </div>
            
        </div>

    )

}

export default Top