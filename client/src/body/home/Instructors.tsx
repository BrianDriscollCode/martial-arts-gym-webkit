import React from "react";


const Instructors = () => {

    return (

        <div id="instructor_section">

            <div id="instructor_container">

                <div className="instructor_card">

                    <div className="instructor_label">
                        <h4> Head Instructor </h4>
                        <h3> RAFAEL DALLINHA </h3>
                    </div>

                    <div>
                        <img src="instructors/RAFAEL.jpg" className="instructor_photo" width="300" height="390" /> 
                    </div>

                </div>

                <div className="instructor_card">

                    <div className="instructor_label">
                        <h4> Jiu Jitsu Instructor </h4>
                        <h3> FERNANDA BONATTO </h3>
                    </div>

                    <div>
                        <img src="instructors/FERNANDA.jpg" className="instructor_photo" width="300" height="390" /> 
                    </div>

                </div>

                <div className="instructor_card">

                    <div className="instructor_label">
                        <h4> Jiu Jitsu Intructor </h4>
                        <h3> Eduardo Correa </h3>
                    </div>

                    <div>
                        <img src="instructors/EDUARDO.jpg" className="instructor_photo" width="300" height="390"/> 
                    </div>

                </div>

                <div className="instructor_card">

                    <div className="instructor_label">
                        <h4> MMA Instructor </h4>
                        <h3> Mark Pagaduan </h3>
                    </div>

                    <div>
                        <img src="instructors/MARK.jpg" className="instructor_photo" width="300" height="390" /> 
                    </div>

                </div>

            </div>

        </div>

    )

}

export default Instructors 