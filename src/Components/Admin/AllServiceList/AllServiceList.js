import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from "../../../images/logos/logo.png";
import Sidebar from '../Sidebar/Sidebar';

const AllServiceList = () => {
    const[loggedInUser , setLoggedInUser]= useContext(UserContext);
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('https://murmuring-journey-43171.herokuapp.com/allOrders')
        .then(res=> res.json())
        .then(data =>setServices(data))
    },[])
    console.log(services);
    return (
        <div className="container-fluid">
            <div className="row mt-3 text-left">
                <div className="col-md-3">
                    <Link to="/"><img src={logo} alt="" style={{width:"150px"}} className="d-block m-auto" /></Link>
                </div>
                <div className="col-m-6 mt-1 ml-auto ">
                   
                </div>
                <div className="col-md-3 mt-1 justify-content-center d-flex">
                
                    <img src={loggedInUser.img} style={{width:"50px",borderRadius:'50%'}} alt=""/>
                <h6 className="mt-3 ml-3">{loggedInUser.firstName}</h6>
                </div>
            </div>
            <div className="row mt-5">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email Id</th>
      <th scope="col">Service</th>
      <th scope="col" >Project Details</th>
      <th scope="col">status</th>
      
    </tr>
  </thead>
  <tbody>
      
    {
        services.map((data)=><tr>
        
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.projectName}</td>
        <td className='w-50'>{data.projectDetails}</td>
        <td>
        <select class="form-control"  id="exampleFormControlSelect1">
      <option className='text-danger'>pending</option>
      <option className='text-warning'>On Going</option>
      <option className='text-success'>Done</option>
      
    </select>
        </td>
      </tr>) 
    }
    
  </tbody>
</table>
            </div>
        </div>
        </div>
        
    );
};

export default AllServiceList;