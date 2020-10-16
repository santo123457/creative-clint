import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Service.css'


const Services = () => {
    
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('https://murmuring-journey-43171.herokuapp.com/services')
        .then(res=> res.json())
        .then(data =>setServices(data))
    },[])
    console.log(services);
    
    return (
        <section className='mt-5 pt-5  ' id='services'>
            <h3 className="text-center font-weight-bolder "> Provide awesome <span style={{color:'#7AB259'}}>services</span></h3>

        <div className="row mt-5 pt-5 service-row">
      
            {
              services.map((data)=><ServiceCard data={data}></ServiceCard>)   
            }
        </div>
        </section>
    );
};

export default Services;