import { data } from 'jquery';
import React, { useEffect, useState } from 'react';


const Feedback = () => {
    const[reviews,setReviews]= useState([])
    useEffect(() =>{
            fetch('https://murmuring-journey-43171.herokuapp.com/reviews')
            .then(res=>res.json())
            .then(data=> setReviews(data))
    },[])
console.log(reviews)
    return (
        <div className=" container">
            <h3 className="text-center mt-5 mb-5">Clients <span style={{color:'#7AB259'}}>Feedback</span></h3>
          <div className="row text-center ">
          {
                reviews.map((data) => <div className="card col-md-3 justify-content-center d-flex shadow p-3 mb-5 bg-white rounded d-block m-auto">
                    <div className="row mt-3 ">
                        <div className="col-md-5">
                        <img src={data.imgLink} className=" d-block m-auto "  style={{width:'64px'}}alt=""/>
                        </div>
                        <div className="col-md-7 mt-2">
                            <h6>{data.name}</h6>
                            <h6>{data.companyName}</h6>
                        </div>
                    </div>
                    <small className="text-muted mt-3">{data.projectDetails}</small>
                </div>)
           }
          </div>
        </div>
    );
};

export default Feedback;