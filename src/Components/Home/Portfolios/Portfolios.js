import React from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from "../../../images/carousel-1.png"
import carousel2 from "../../../images/carousel-2.png"
import carousel3 from "../../../images/carousel-3.png"
import carousel4 from "../../../images/carousel-4.png"
import carousel5 from "../../../images/carousel-5.png"

const CarouselItems =[
    {
        img: carousel1
    },
    {
        img: carousel2
    },
  
    {
        img: carousel4
    },
    {
        img: carousel5
    },
    {
        img: carousel3
    }
]

const Portfolios = () => {
    return (
        
            <div className="" style={{backgroundColor:"#111430"}} id='portfolio'>
                <h3 className="text-center text-white pt-5 pb-5">Here are some of <span style={{color:"#7AB259"}}>our works</span></h3>
               <Carousel className ="w-50 d-block m-auto pb-5">

            {
                CarouselItems.map((data)=><Carousel.Item>
                <img
                  className="d-block w-100"
                  src={data.img}
                  alt=""
                />
              </Carousel.Item>) 
            }
  
</Carousel>
            </div>
        
    );
};

export default Portfolios;