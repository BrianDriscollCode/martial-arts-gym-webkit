import React, { useState, useEffect, useReducer } from "react";
import { connect } from "react-redux";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom"; 

//import { useSpring, animated } from 'react-spring';



const Banner = ( { banners }: any ) => {

    const [chooseBanner, setChooseBanner] = useState(2);
    const [imageLink, setImageLink] = useState(`url("/banner/mats.jpg")`);

    useEffect(() => {

        const interval = setInterval(() => {

            switch (chooseBanner) {
                case 1:
                    setChooseBanner(2)
                    setImageLink(banners[0].image_link); 
                    break;  
                case 2:
                    setChooseBanner(3)
                    setImageLink(banners[1].image_link);  
                    break;
                case 3:
                    setChooseBanner(1)
                    setImageLink(banners[1].image_link);  
                    break;
            }
            
        }, 3000);
        return () => clearInterval(interval)

    });

    const changeOpacity = () => {

        return 1;

    }

    const returnZero = () => {

        return 0;

    }

    console.log(banners);

    return (
        
        <div id="banner_section">

            <div 
                id="banner_div"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url("/banner/mats.jpg")`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    opacity: chooseBanner == 1 ? '1' : "0",
                    height: chooseBanner == 1 ? '800px' : "0",
                    transition: 'opacity 1s, height 2s'
                }}
                
            >


                    <div 
                        id="inside_banner"
                    >
                        

                            <h1> {banners[0].title} </h1>
                            <p> {banners[0].tagline} </p>
                        
                            <div id="banner_button_container">
                                <button className="banner_button"> See Classes </button> 
                            </div>
                                    
                            


                    </div>  
     
            

                <div id="banner_arrow_container">
                
                    <a href="#textBox">

                        <BsChevronDown 
                            size="75"
                            id="banner_arrow_icon"
                        />

                    </a>

                </div>
                
            </div>

            <div 
                id="banner_div"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url("/banner/class.jpg")`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    opacity: chooseBanner == 2 ? '1' : "0",
                    height: chooseBanner == 2 ? '800px' : "0",
                    transition: 'opacity 1s, height 2s'
                }}
            >

                <div 
                    id="inside_banner"
                >

                    <h1> {banners[1].title} </h1>
                    <p> {banners[1].tagline} </p>
                    
                
                       
                    <div id="banner_button_container">
                            <button className="banner_button" id="button1"> Adults </button> 
                            <button className="banner_button" id="button2"> Kids </button>
                    </div>:
                               
                                
                        

                </div>
                
                <div id="banner_arrow_container">
                
                    <a href="#textBox">

                        <BsChevronDown 
                            size="75"
                            id="banner_arrow_icon"
                        />

                    </a>
                    
                </div>
                
            </div>

            <div 
                id="banner_div"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url("/banner/class.jpg")`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    opacity: chooseBanner == 3 ? '1' : "0",
                    height: chooseBanner == 3 ? '800px' : "0",
                    transition: 'opacity 1s, height 2s'
                }}
            >

                <div 
                    id="inside_banner"
                >

                    <h1> {banners[1].title} </h1>
                    <p> {banners[1].tagline} </p>
                    
                
                       
                    <div id="banner_button_container">
                            <button className="banner_button" id="button1"> Adults </button> 
                            <button className="banner_button" id="button2"> Kids </button>
                    </div>:
                               
                                
                        

                </div>
                
                <div id="banner_arrow_container">
                
                    <a href="#textBox">

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