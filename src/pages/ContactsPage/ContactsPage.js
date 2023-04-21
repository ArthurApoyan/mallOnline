import React from 'react';

import "./contactsPage.css";
import HomePageContent from "../../components/HomePageContent/HomePageContent";

const ContactsPage = ({children}) => {
    return (
        <div>
            {children}
            <div className="contactsContainer">
                <div className="contactsInfo">
                    <p><span>Phone -</span> +37453612346, +37453748596, +37456789452</p>
                    <p><span>E-mail -</span> onlinemall@info.com</p>
                    <p><span>Address -</span> Everywhere</p>
                </div>
                <div className="contactsDescription">
                    <p>Contact us and our staff will answer your questions quickly and efficiently.</p>
                </div>
                <HomePageContent/>
            </div>
        </div>
    );
};

export default ContactsPage;