import React from 'react';
import HomePageContent from "../../components/HomePageContent/HomePageContent";

import homePageBackground1 from "../../utils/images/homePageBackground-1.jpeg";

import "./homePage.css";

const HomePage = ({ children }) => {
    return (
        <div className="homePage">
            <div>{children}</div>
            <div className="homePageBackground">
                <img src={homePageBackground1} alt="Home Page Background"/>
                <div>
                    <h2>Mall Online</h2>
                    <h3>• Always low prices</h3>
                    <h3>• Frequent sales</h3>
                    <h3>• High quality goods</h3>
                </div>
            </div>
            <HomePageContent/>
        </div>
    );
};

export default HomePage;