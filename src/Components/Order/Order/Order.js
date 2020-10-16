import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { UserContext } from '../../../App';
import logo from "../../../images/logos/logo.png";
import AssignmentIcon from '@material-ui/icons/Assignment';
import { IconButton } from '@material-ui/core';
import SmsIcon from '@material-ui/icons/Sms';
import './Order.css'

const Order = () => {
    const[loggedInUser , setLoggedInUser]= useContext(UserContext);
    let { name } = useParams();
    const [isAdmin,setIsAdmin]=useState(false);
    useEffect(()=>{
        fetch('https://murmuring-journey-43171.herokuapp.com/isAdmin',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res=>res.json())
         .then((data)=>setIsAdmin(data))
    },[])



    
    const[info,setInfo]=useState({});
    const[file,setFile] = useState(null) 
    const handleBlur = e=>{
        const  newInfo ={...info};
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo)
    }
    const handleFileChange =(e)=>{
        const  newFile = e.target.files[0];
        setFile(newFile);
    }

  

    // const { register, handleSubmit} = useForm();
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',file)
        formData.append('name',info.name)
        formData.append('email',info.email)
        formData.append('projectName',info.projectName)
        formData.append('projectDetails',info.projectDetails)
        fetch('https://murmuring-journey-43171.herokuapp.com/addOrder', {   
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log('Successfull', data);
            })
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
                {
                       isAdmin && <Link to="/admin-panel/allServices" style={{textDecoration:"none"}}>
                           <button className=" mt-3 btn btn-dark mr-5">
                           Admin
                       </button>
                       </Link>
                   }
                    <img src={loggedInUser.img} style={{width:"50px",borderRadius:'50%'}} alt=""/>
                <h6 className="mt-3 ml-3">{loggedInUser.firstName}</h6>
                </div>
            </div>
            <div className="row mt-5 text-left " >
                <div className="col-md-2 orderItem mb-5 pb-5 ml-5 pl-5">
                    <Link to={"/order/"+ name} style={{textDecoration:"none"}} >
                    <h6 style={{color:"#009444"}}>
                     <IconButton ><AddShoppingCartIcon style={{color:"#009444"}}/> </IconButton>
                      Order
                     </h6>
                     
                    </Link>
                
                    <Link to={"/service-list/"+ name} style={{textDecoration:"none"}}>                    
                    <h6 className="text-dark mt-3">
                    <IconButton><AssignmentIcon className="text-dark"/>  </IconButton>
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


                <div className="col-md-5 ml-auto">

                <form onSubmit={handleSubmit}>
                            <div className="form-group">
                            
                            <input type="text" className="form-control" id="" placeholder="Your Name / Company's Name" name="name" onBlur={handleBlur} required/>
                            </div>

                            <div className="form-group ">
                            <input type="email" className="form-control"placeholder="Your Email Address"  name="email" onBlur={handleBlur}  required/>
                            </div>
                            <div className="form-group">
                            
                            <input type="text" className="form-control" id="" defaultValue={name}name="projectSub"  onBlur={handleBlur} placeholder="ProjectSub" required />
                            </div>

                            <div className="form-group">
                           
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Project Details" onBlur={handleBlur} name="projectDetails"  required>

                            </textarea>
                        </div>


                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control" id="" placeholder="Price"  name="price" onBlur={handleBlur} required/>
                                </div>
                                <div className="col">
                                <input type="file" onChange={handleFileChange} id="file" className="inputfile"  />
                                    <label htmlFor="file" ><h6>
                                      Upload <img src="https://www.flaticon.com/svg/static/icons/svg/25/25399.svg" style={{width:"30px"}} alt=""/>
                                        </h6></label>
                                </div>
                            </div>
                            
                        
                        
                        
                        <button type="submit" className="btn btn-dark mt-5 ">Send</button>
                </form>

                </div>
                <div className="col-md-4">

                </div>
            </div>
            
        </div>
    );
};

export default Order;