import React from "react";
import { Link } from "react-router-dom"
import { connect } from "react-redux"

const Navigation = ( { currentAccount }: any ) => {

    const printAccount = () => {

        console.log(currentAccount)

    }

    return (

        <div id="navigation">

            <div id="navigation_wrapper">

                <div id="logo_container">
                    <Link to="/"><img src="main_logo.png" width="75" height="auto" /></Link>
                </div> 

                <div id="navigation_list">
                    
                    <Link to="/" className="outer_nav_link"><div className="nav_link">  HOME  </div></Link>
                    <Link to="/about" className="outer_nav_link"><div className="nav_link">  ABOUT  </div></Link>
                    <Link to="/classes" className="outer_nav_link"><div className="nav_link">  CLASSES  </div></Link>
                    <Link to="/schedule" className="outer_nav_link"><div className="nav_link">  SCHEDULE  </div></Link>
                    <Link to="/contact" className="outer_nav_link"><div className="nav_link">  CONTACT </div></Link>
                    <Link to="/about" className="outer_nav_link"></Link><div 
                        id="free_pass_button"
                    > 
                        <a onClick={printAccount}> GET A FREE PASS </a> 
                    </div>


                </div>


            </div>
            
        </div>

    )

}

const mapStateToProps = (state: any) => {

        return { currentAccount: state.currentAccount }

}

export default connect(mapStateToProps)(Navigation)