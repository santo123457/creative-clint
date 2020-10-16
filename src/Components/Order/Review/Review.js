import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { UserContext } from '../../../App';
import logo from "../../../images/logos/logo.png";
import AssignmentIcon from '@material-ui/icons/Assignment';
import { IconButton } from '@material-ui/core';
import SmsIcon from '@material-ui/icons/Sms';
import { useForm } from "react-hook-form";
import './Review.css'
const Review = () => {
    const[loggedInUser , setLoggedInUser]= useContext(UserContext);
    let { name } = useParams();

    

    const { register, handleSubmit } = useForm();
  const onSubmit = data => {
      fetch('https://murmuring-journey-43171.herokuapp.com/addReviews',{
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => console.log(data))
  };
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
        <div className="row mt-5 text-left " >
            <div className="col-md-2 mb-5 pb-5 ml-5 pl-5 ">
                <Link to={"/order/"+ name} style={{textDecoration:"none"}} className="text-dark" >
                <h6 >
                 <IconButton ><AddShoppingCartIcon className="text-dark"/> </IconButton>
                 Order
                 </h6>
                 
                </Link>
            
                <Link to={"/service-list/"+ name} style={{textDecoration:"none"}}>                    
                <h6 className="text-dark mt-3" >
                <IconButton><AssignmentIcon className="text-dark"/>  </IconButton>
                Service list 
                </h6>
                </Link>
                <Link to={"/review/"+ name}  style={{textDecoration:"none"}}>                    
                <h6 style={{color:"#009444"}} className="mt-3">
                <IconButton><SmsIcon  style={{color:"#009444"}}/>  </IconButton>
                Review
                </h6>
                </Link>
            </div>
            <div className="col-md-7 ">

            <form className="w-75 sm-form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group ">
                            
                            <input type="text" className="form-control" ref={register} id="" placeholder="Your Name" name="name" required/>
                            </div>

                            
                            <div className="form-group">
                            
                            <input type="text" className="form-control" ref={register} id="" name="companyName" placeholder="Company's Name"  />
                            </div>
                            <div className="form-group">
                            
                            <input type="text" className="form-control" ref={register} id="" name="imgLink" placeholder="Your image Link"  />
                            </div>

                            <div className="form-group">
                           
                            <textarea className="form-control" ref={register} id="exampleFormControlTextarea1" rows="3" placeholder="Description" name="projectDetails"  required>

                            </textarea>

                            
                        </div>
                        
                        <button type="submit" className="btn btn-dark mt-5 ">Send</button>
                </form>

            </div>
        </div>
        
    </div>
    );
};

export default Review;