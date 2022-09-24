import React from "react";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa"
import { Link } from "react-router-dom";

const Footer = (): any => {

    const scroll = () => {

        window.scrollTo(0, 0);

    }

    return (

        <div id="footer">

            <div id="footer_wrapper">

                <div className="footer_section" id="join_class_footer">

                    <div id="left_side_wrapper" >

                        <div className="footer_info">
                            <h4> Experience Gracie Jiu Jitsu</h4>
                            <h3> Join a Free Class or Try Out Self Defence!</h3>
                        </div>

                        <div className="footer_info">

                            <p> Get know our community and coaches! Join a Free Class 
                                if you are experienced and ready to start or try a Free 
                                1-on-1 session fro additional guidance as you get going!
                            </p>

                            <Link 
                                to="/classes"
                                onClick={() => scroll()}
                            > 
                            
                            <button> Book A Free Class! </button>
                            </Link>

                        </div>  

                    </div>
                    
                </div>

                <div className="footer_section" id="logo_social_footer">

                    <img src="main_logo.png" width="175" height="auto" /> 

                    <div id="footer_social_links">

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

                <div className="footer_section" id="contact_footer">

                    <div className="footer_info">
                        <h4> Contact Us </h4>
                        <h3> Gracie Jiu Jitsu </h3> 
                    </div>
                    

                    <div className="footer_info">
                        <p> 4242 North Oracle Road, Suite 195</p>
                        <p> Tucson, AZ 85705 </p>
                        <p id="footer_info_location"> located in the Wetmore Plaza - northside of the 
                            building, next to ideal Image
                        </p>
                    </div>
                    
                    <div className="footer_info">
                        <p> Call: 520-344-4892 </p>
                        <p> Text: 520-619-7692 </p>
                        <p> apex.tucson.gmail.com </p> 
                    </div>
                    
                </div>

            </div>

        </div> 

    )

}

export default Footer;