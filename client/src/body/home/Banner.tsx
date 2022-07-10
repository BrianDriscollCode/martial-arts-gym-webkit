import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom"; 


const Banner = ( { banners }: any ) => {

    const [chooseBanner, setChooseBanner] = useState(1);

    const [title, setTitle] = useState('Gracie Sierra Jiu Jitsu');
    const [tagline, setTagline] = useState('Elite Training for BJJ, Judo, Boxing, and Muay Thai');
    const [buttonAmount, setButtonAmount] = useState(2);
    const [buttonOne, setButtonOne] = useState('Adults');
    const [buttonTwo, setButtonTwo] = useState("Kids");
    const [imageLink, setImageLink] = useState(`url("/banner/mats.jpg")`)


    useEffect(() => {

        const interval = setInterval(() => {

            switch (chooseBanner) {
                case 1:
                    setChooseBanner(2)
                    setTitle(banners[0].title);
                    setTagline(banners[0].tagline);
                    setButtonAmount(banners[0].buttonAmount);
                    setButtonOne(banners[0].buttonOne);
                    setButtonTwo(banners[0].buttonTwo);
                    setImageLink(banners[0].image_link); 
                    break;  
                case 2:
                    setChooseBanner(1)
                    setTitle(banners[1].title);
                    setTagline(banners[1].tagline);
                    setButtonAmount(banners[1].buttonAmount);
                    setButtonOne(banners[1].buttonOne);
                    setButtonTwo(banners[1].buttonTwo);
                    setImageLink(banners[1].image_link);   
                    break;
            }
            
            


        }, 10000);
        return () => clearInterval(interval)

    });

    console.log(banners)

    return (

        <div>

            <div 
                id="banner_div"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url("/banner/mats.jpg")`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    display: chooseBanner == 1 ? 'flex' : 'none'
                }}
                
            >

                <div id="inside_banner">

                    <h1> {title} </h1>
                    <p> {tagline} </p>
                    
                        { // Option allows for reusability of different websites
                            buttonAmount > 1 ? 
                                <div id="banner_button_container">
                                    <button className="banner_button" id="button1"> {buttonOne} </button> 
                                    <button className="banner_button" id="button2"> {buttonTwo} </button>
                                </div>:
                                <div id="banner_button_container">
                                    <button className="banner_button"> {buttonOne} </button> 
                                </div>
                                
                        }

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
                    display: chooseBanner == 2 ? 'flex' : 'none'
                }}
            >

                <div id="inside_banner">

                    <h1> {title} </h1>
                    <p> {tagline} </p>
                    
                        { // Option allows for reusability of different websites
                            buttonAmount > 1 ? 
                                <div id="banner_button_container">
                                    <button className="banner_button" id="button1"> {buttonOne} </button> 
                                    <button className="banner_button" id="button2"> {buttonTwo} </button>
                                </div>:
                                <div id="banner_button_container">
                                    <button className="banner_button"> {buttonOne} </button> 
                                </div>
                                
                        }

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