import React, { useState, useEffect, useReducer } from "react";
import { connect } from "react-redux";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom"; 



const Banner = ( { banners }: any ) => {

    const [chooseBanner, setChooseBanner] = useState(2);
    const nanoId = require('nano-id')

    useEffect(() => {

        const interval = setInterval(() => {

            switch (chooseBanner) {
                case 1:
                    setChooseBanner(2)
                    break;  
                case 2:
                    setChooseBanner(1)
                    break;
            }
            
        }, 5500);
        return () => clearInterval(interval)

    });

    const getRandomkey = (): string => {

        return nanoId();

    }

    return (
        
        <div id="banner_section">

            <div 
            id="banner_div_1"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url("/banner/mats.jpg")`,
                backgroundSize: 'cover',
                transition: 'opacity 1s',
                opacity: chooseBanner == 1 ? '1' : '0',
                animation: chooseBanner == 1 ? 'move1': 'null',
            }}> 

                <div id="inside_banner" key={getRandomkey()}>
                        

                        <h1> {banners[0].title} </h1>
                        <p> {banners[0].tagline} </p>
                    
                        <div id="banner_button_container">
                            <button id="lone_button" className="banner_button"> See Classes </button> 
                        </div>
                                
                        


                </div>  
 
        

                <div id="banner_arrow_container">
            
                    <a href="#first_section">

                        <BsChevronDown 
                            size="75"
                            id="banner_arrow_icon"
                        />

                    </a>

                </div>

            </div>

            <div 
            id="banner_div_2"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url("/banner/class.jpg")`,
                backgroundSize: 'cover',
                transition: 'opacity 1s',
                opacity: chooseBanner == 2 ? '1' : '0',
                }}> 

                <div id="inside_banner" key={getRandomkey()}>
                        

                        <h1> {banners[1].title} </h1>
                        <p> {banners[1].tagline} </p>
                    
                        <div id="banner_button_container">
                            <button id="button1" className="banner_button"> Adults </button> 
                            <button id="button2" className="banner_button"> Kids </button>
                        </div>
                                
                        


                </div>  
 
        

                <div id="banner_arrow_container">
            
                    <a href="#first_section">

                        <BsChevronDown 
                            size="75"
                            id="banner_arrow_icon"
                        />

                    </a>

                </div>

            </div>

        </div>

    )

}

const mapStateToProps = (state: any) => {

    return { banners: state.homeBannerInfo }

}

export default connect(mapStateToProps)(Banner)