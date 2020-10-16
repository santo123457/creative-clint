import React from 'react';
import airbnb from '../../../images/logos/airbnb.png'
import google from '../../../images/logos/google.png'
import netflix from '../../../images/logos/netflix.png'
import slack from '../../../images/logos/slack.png'
import uber from '../../../images/logos/uber.png'
import './Support.css'
const Support = () => {
    
    return (
        <section className="row justify-content-center d-flex mt-5">
           
                <div className="col-md-2 col-sm-1 mt-2">
            <img src={slack} alt="" style={{"width":"140px"}}/>
            </div>
            <div className="col-md-2 col-sm-1 mt-1"><img src={google} alt=""style={{"width":"129px"}}/></div>
            <div className="col-md-2 col-sm-1"><img src={uber} alt="" style={{"width":"100px"}}/></div>
            <div className="col-md-2 col-sm-1"><img src={netflix} alt="" style={{"width":"120px"}}/></div>
            <div className="col-md-2 mt-1 col-sm-1"><img src={airbnb} alt=""style={{"width":"161px"}}/></div>
           
        </section>
    );
};

export default Support;