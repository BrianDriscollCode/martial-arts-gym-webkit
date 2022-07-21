import React from "react";


const Sub_Banner = () => {

    return (

        <div 
            id="banner_div_1"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url("/banner/mats.jpg")`,
                backgroundSize: 'cover',
                height: '300px'
            }}
        > 

            <div id="inside_banner">

                <h2 id="sub_banner_title"> Login </h2>

            </div>


            

        </div>

    )

}

export default Sub_Banner