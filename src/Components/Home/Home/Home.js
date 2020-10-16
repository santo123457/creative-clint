import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import Feedback from '../Feedback/Feedback';
import Header from '../Header/Header';
import Portfolios from '../Portfolios/Portfolios';
import Services from '../Services/Services';
import Support from '../Suppport/Support';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="container">
            <Support></Support>
            <Services></Services>
            <Portfolios></Portfolios>
            <Feedback></Feedback>
            <ContactUs></ContactUs>
            </div>
        </div>
    );
};

export default Home;