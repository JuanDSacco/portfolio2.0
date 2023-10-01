import React from "react";
import '../Styles/style.scss'
import ContentContainer from "../ContentContainer/ContentContainer";

const BackgroundContainer = () => {
    return (
        
        <div className="divBackgroundContainer">
            <video autoPlay muted loop className="videoBackground"> 
                <source src="/VideoBackground/VideoBackground.mp4" type="video/mp4"/>
            </video>
            <ContentContainer/>
        </div>
    );
};

export default BackgroundContainer;
