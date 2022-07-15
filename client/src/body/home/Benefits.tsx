import React from "react"
import { FaCheck } from "react-icons/fa"

const Benefits = () => {


    return (

        <div 
            id="benefits_section" 
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url("/images/home/jiu-jitsu-rolling.jpg")`,
                backgroundSize: 'cover'
            }}
        >

            <div id="benefits_container"> 
            
                <div id="empty_benefits_container"> </div>

                <div id="benefits_list"> 

                    <h2> At Gracie Academy You Will: </h2>
                    
                    <div className="benefits_item">
                        <i> <FaCheck size="1.3em" /> </i>
                        <p> Build your fitness </p>
                    </div>

                    <div className="benefits_item">
                        <i> <FaCheck size="1.3em" /> </i>
                        <p> Learn self-defense skills </p>
                    </div>

                    <div className="benefits_item">
                        <i> <FaCheck size="1.3em" /> </i>
                        <p> Increase your confidence </p>
                    </div>

                    <div className="benefits_item">
                        <i> <FaCheck size="1.3em" /> </i>
                        <p> Learn Boxing, Jiu Jitsu, MMA, and more! </p>
                    </div>

                    <button className="page_button_" id="benefits_about_button"> About  </button>
                </div>

            </div>

        </div>

    )


}

export default Benefits