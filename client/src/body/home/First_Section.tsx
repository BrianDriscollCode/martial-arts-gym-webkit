import React from "react";

const First_Section = () => {


    return (

        <div id="textBox">

            <h1> First Title of Test </h1>
            <h2> Second Title of Test</h2> 

            <div id="first_section_content"> 

                <div id="first_section_text_area">

                    <p> Our Academy offers a range of disciplines, with separate Brazilian Jiu-Jitsu, Judo, grappling arts, Muay Thai, boxing, and fitness areas in a clean and spacious two story 12,000 square foot Martial Arts Studio! We offer something for everyone, with classes for kids, (boys & girls), Teenagers and men & women of all ages and skill levels. We are one of the largest and most modern premier Brazilian Jiu Jitsu, Judo, No-Gi, Muay Thai, Boxing and fitness training Centers in California, with a spacious 4,000 square foot spring loaded floor system with eight sparring areas and an additional 1,000 square foot spring-loaded floor with an additional two sparring areas! The San Diego Brazilian Jiu Jitsu Academy & Mixed Martial Arts has the biggest spring loaded mat space in United States (in a private school). If you are serious about studying Brazilian Jiu-Jitsu in Escondido, Vista or San Marcos areas then San Diego Brazilian Jiu-Jitsu Academy and Mixed Martial Arts is the right choice. </p>
                    <p> Paulo Fernando is the head instructor of San Diego Brazilian Jiu Jitsu Academy & Mixed Martial Arts and was promoted to a 4th degree black belt by Master Carlson Gracie Senior on November 13th of 2005. Today Mr. Fernando is a 6th Degree Black belt in Brazilian Jiu Jitsu and 6th Degree Red and White belt in Judo. </p>

                    <div>
                        <button> Learn more </button>
                        <button> See Classes </button>
                    </div>


                </div>

                <div className="portfolio_explanation" id="videos">

    

                <div id="portfolio_video">
                    
                    <h2> Portfolio Explanation </h2>

                    <div className="iframe_container">
                        <iframe 
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/lG4d4cy90Tc"
                        title="YouTube video player" 
                        frameBorder="0" 
                        className="video_iframe">
                        </iframe>

                    </div>
                    

                </div>

            </div>


            </div>

        </div>

    )


}

export default First_Section