import React from "react";
import Sub_Banner from "../home/Sub_Banner";

const Classes = () => {

    return (

        <div id="class_page">

            <Sub_Banner title="Classes" />

            <div id="classes_page_wrapper">

                <div id="classes_header_section">
                    <h2> Gracie Jiu Jitsu Programs </h2>
                    <p> One of the primary goals at Legion is to teach our students jiu jitsu and Boxing, as fast and efficiently as possible. </p>
                    <p> We like to think that we achieve this by using Legion Programs. These programs are collections of curriculums. By having a path of learning planned and tested regularly, we can make sure that you’re not learning “whatever the coach feels like showing today”. </p>
                    <p>Learn more about Legion Programs below, starting with the Beginner ones. </p>
                </div>
               
               <div id="classes_container">

                    <div className="class_section">

                        <div className="class_section_text_area"> 
                        
                            <h3> Kids Classes </h3>
                            <p> Kids benefit tremendously from martial arts, but especially jiu jitsu. Our kids programs are growing the fastest and changing family lives. </p> 

                            <p> Forging bully-proof, confident, agile, disciplined, engaged and appropriately tired kids. </p>

                            <p> <b>Age Group:</b> 4-6, 7-11, 11-15 </p>
                        </div>
                        <img className="class_section_image" src="/images/classes/class_1.jpg" /> 

                </div>

                    <div className="class_section">

                        <img className="class_section_image" src="/images/classes/class_2.jpg" /> 

                        <div id="type_2_text" className="class_section_text_area"> 

                            <h3> Adult Classes </h3>
                            <p> For members who have reached the rank of blue belt or got the green light from Beginner Program Coaches unlock several classes throughout the day. Great for people transitioning away from their old BJJ academy. </p>

                            <p><b>Classes included:</b> 6am Rise & Sunshine, some 9am classes, 6pm class & competition class. </p>


                        </div>

                    </div>

                    <div className="class_section">

                        <div className="class_section_text_area"> 
                        
                            <h3> Boxing Classes </h3>
                            <p> Kids benefit tremendously from martial arts, but especially jiu jitsu. Our kids programs are growing the fastest and changing family lives. </p> 

                            <p> Forging bully-proof, confident, agile, disciplined, engaged and appropriately tired kids. </p>


                        </div>
                        <img className="class_section_image" src="/images/classes/class_3.jpg" /> 

                    </div>

                    <div className="class_section">

                        <img className="class_section_image" src="/images/classes/class_4.jpg" width="auto" /> 

                        <div id="type_2_text" className="class_section_text_area"> 

                            <h3> MMA Classes </h3>
                            <p> Kids benefit tremendously from martial arts, but especially jiu jitsu. Our kids programs are growing the fastest and changing family lives. </p> 

                            <p> Forging bully-proof, confident, agile, disciplined, engaged and appropriately tired kids. </p>

                        </div>

                    </div>


               </div>

                 

            </div>
            

        </div>

    )

}

export default Classes;