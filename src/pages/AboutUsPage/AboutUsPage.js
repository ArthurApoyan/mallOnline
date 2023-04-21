import React from 'react';
import aboutUsPageImage_2 from "../../utils/images/aboutUsPageImage_2.jpeg";
import aboutUsPageImage_1 from "../../utils/images/aboutUsPageImage_1.png";

import "./aboutUsPage.css";
import HomePageContent from "../../components/HomePageContent/HomePageContent";

const AboutUsPage = ({children}) => {
    return (
        <div className="aboutContainer">
            {children}
            <div className="aboutFirstFloor">
                <p>With us, your life will become much easier and more fun. In our range you will find absolutely everything you want. From food to clothes, from phones and laptops to gardening equipment. The main thing is not to get lost in the ocean of products!!!</p>
                <img src={aboutUsPageImage_2} alt="about"/>
            </div>
            <hr className="aboutHr"/>
            <div className="aboutSecondFloor">
                <img src={aboutUsPageImage_1} alt="about"/>
                <p>We support a variety of payment methods for products, which makes it possible to instantly order what you need. And an advanced delivery network will bring you your goods almost all over the world in the shortest possible time.</p>
            </div>
            <HomePageContent/>
        </div>
    );
};

export default AboutUsPage;