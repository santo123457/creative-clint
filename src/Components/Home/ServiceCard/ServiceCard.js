import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring'
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const ServiceCard = (props) => {
    const [prop, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    const {serviceName,image,serviceTitle,description
    } = props.data
    return (
        
        <animated.div
        class="card"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: prop.xys.interpolate(trans) }}
      
        className="col-md-4 col-sm-6 d-flex mb-5 pb-5 justify-content-center text-center">
           <Link to={"/order/"+ serviceName} style={{textDecoration:"none"}} className="text-dark">
           <div className="w-75">
           <img src={`data:image/png;base64,${image.img}`}  style={{width:"75px",borderRadius:'50px',display:'block',margin:"auto"}}alt=""/> 
           <h5 className='mt-4'> {serviceTitle} </h5>
            <small className="card-text">{description}</small>
           </div>
           </Link>
        </animated.div>
    );
};

export default ServiceCard;