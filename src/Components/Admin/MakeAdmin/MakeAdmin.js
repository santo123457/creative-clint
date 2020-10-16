import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from "../../../images/logos/logo.png";
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const[loggedInUser , setLoggedInUser]= useContext(UserContext);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
            fetch('https://murmuring-journey-43171.herokuapp.com/addAdmin',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
            .then(res=> res.json())
            .then(console.log(data))
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
                
                    <img src={loggedInUser.img} style={{width:"50px",borderRadius:'50%'}} alt=""/>
                <h6 className="mt-3 ml-3">{loggedInUser.firstName}</h6>
                </div>
            </div> 
            <div className="row mt-5">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <form onSubmit={handleSubmit(onSubmit)} >
                <div className="form-group w-50">
                     <input type="text" className="form-control" id="" placeholder="Enter a email of new Admin" name="email" ref={register} required/>
                 </div>
                    <button className="btn btn-success" type='submit'> Submit </button>
                    
                </form>
            
            </div>
            </div>
        </div>
    );
};

export default MakeAdmin;