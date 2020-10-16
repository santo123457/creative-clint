import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { UserContext } from '../../../App';
import logo from "../../../images/logos/logo.png";
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Button, IconButton } from '@material-ui/core';
import SmsIcon from '@material-ui/icons/Sms';

const ServiceList = () => {
    const[loggedInUser , setLoggedInUser]= useContext(UserContext);
    const[orders,setOrders] = useState([]);
    let { name } = useParams();

    // useEffect(()=>{
    //     fetch('https://murmuring-journey-43171.herokuapp.com/orders')
    //     .then(res=> res.json())
    //     .then(data =>setOrders(data))
    // },[])
    // const places = fakeData.find(placeName =>placeName.name === name);



    useEffect(()=>{
        fetch('https://murmuring-journey-43171.herokuapp.com/orders?email='+loggedInUser.email)
        .then(res=> res.json())
        .then(data =>setOrders(data))
    },[])
    
    return (
        <div className="container-fluid">
       <div className="row mt-3 text-left">
                <div className="col-md-3">
                    <Link to="/"><img src={logo} alt="" style={{width:"150px"}} className="d-block m-auto" /></Link>
                </div>
                <div className="col-m-6 mt-1 ml-auto ">
                   
                </div>
                <div className="col-md-3 mt-1 justify-content-center d-flex">
                {/* {
                       loggedInUser.isSignIn && <Link to="/admin-panel" style={{textDecoration:"none"}}>
                           <button className="btn btn-dark mr-5 mt-3">
                           Admin
                       </button>
                       </Link>
                   } */}
                    <img src={loggedInUser.img} style={{width:"50px",borderRadius:'50%'}} alt=""/>
                <h6 className="mt-3 ml-3">{loggedInUser.firstName}</h6>
                </div>
            </div>
        <div className="row mt-5 text-left " style={{height:"90vh"}}>
            <div className="col-md-2 mb-5 pb-5 ml-5 pl-5">
                <Link to={"/order/"+ name} style={{textDecoration:"none"}}  >
                <h6 className="text-dark">
                 <IconButton ><AddShoppingCartIcon className="text-dark" /> </IconButton>
                  Order
                 </h6>
                 
                </Link>
            
                <Link to={"/service-list/"+ name} style={{textDecoration:"none"}}>                    
                <h6 style={{color:"#009444"}} className="mt-3">
                <IconButton><AssignmentIcon  style={{color:"#009444"}}/>  </IconButton>
                Service list 
                </h6>
                </Link>
                <Link to={"/review/"+ name} style={{textDecoration:"none"}}>                    
                <h6 className="text-dark mt-3">
                <IconButton><SmsIcon className="text-dark"/>  </IconButton>
                Review
                </h6>
                </Link>
            </div>
            <div className="col-md-7">
                <div className="row ">
                {
                    orders.map((data)=><div className="col-md-4shadow-lg p-3 mb-5 bg-white rounded col-sm-6 d-flex mb-5 pb-5 justify-content-center text-center">
                    <div className="w-75">
                    <div className="row">
                    <div className="col-md-4">
                    <img src={`data:image/png;base64,${data.image.img}`}  style={{maxWidth:"64px",height:'64px',borderRadius:'50%',}}alt=""/> 
                    </div>
                    <div className="col-md-4 offset-md-4 d-block m-auto">
                        <Button variant="outlined" color="secondary" > Pending</Button>
                    </div>
                    </div>
                    <h5 className='mt-4'> {data.projectName} </h5>
                     <small className="card-text">{data.projectDetails}</small>
                    </div>
                 </div>)
                }
                </div>
            </div>
        </div> 
    </div>
    );
};

export default ServiceList;