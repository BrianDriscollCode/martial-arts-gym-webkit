import React from "react";
import Free_Class_Form from "./Free_Class_Form";
import Sub_Banner from "../home/Sub_Banner";

const About = () => {

    return (

        <div id="about_page">

            <Sub_Banner title="About" />

            <div id="about_page_wrapper">
                <div id="about_page_section_left">
                    <h3> Gracie Sierra Jiu Jitsu </h3>
                    <p> We offer world-class level Brazilian Jiu-Jitsu instruction for 
                        individuals, families, and Law Enforcement officials of Austin, 
                        and is a reference for fitness, character development, self-defense, 
                        martial art, and Brazilian Jiu-Jitsu training for the communities of 
                        Austin, Texas. </p>
                    <p> The Gracie Barra North Austin classes are aligned with the Gracie 
                        Barra Program Structure developed by Master Carlos Gracie Jr. to 
                        meet specific learning needs from people with different ages, gender 
                        and levels. Our clean, friendly, and progress oriented environment 
                        allows the students to have a challenging, inspirational, and warm 
                        learning and training experience that always make them feel like 
                        coming back. </p>
                    <p> Gracie Barra is for anyone who values discipline, wellness, martial 
                        art, respect, and is looking for a well balanced life-style. It 
                        doesn’t matter if you are a person with no training background that 
                        wants to loose weight or learn self-defense, a busy business man 
                        looking for a stress relieving activity, a parent searching for an 
                        something to complement the education of your kids, or a experienced 
                        martial artist aiming for the further development of your fighting 
                        skills, come to the school. </p>
                    <p> We are sure you will find an exciting and challenging place that will 
                        allow you to achieve your goals. </p>
                    <p> Join Now! Schedule a Free Week! </p>

                </div>
                
                <div id="about_page_section_right">

                    <img src="/images/about/about_page_image.jpg" width="550" height="auto" /> 
                    <h4> Join Now! Schedule a Free Week! </h4>
                    <Free_Class_Form />
                    <button className="page_button_" id="about_button_submit"> SUBMIT </button>

                </div>
            </div>
        </div>

    )

}

export default About;