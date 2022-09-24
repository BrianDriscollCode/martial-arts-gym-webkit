import React from "react";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom"; 
import { connect } from "react-redux"

const Top = ( { currentAccount }: any ) => {

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
{/* 
                    <div className="social_links" id="login_text">
                        
                            {

                                currentAccount.username === 'test' ? 
                                    <Link to="/login"> Login/Sign up </Link> :  
                                    <Link to="/account"> {currentAccount.data[0].username} </Link>

                            } 

                    </div> */}


                </div>

            </div>
            
        </div>

    )

}

const mapStateToProps = (state: any) => {

    return { currentAccount: state.currentAccount }; 

}

export default connect(mapStateToProps)(Top)