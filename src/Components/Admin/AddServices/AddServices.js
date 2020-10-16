import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from "../../../images/logos/logo.png";
import Sidebar from '../Sidebar/Sidebar';
import './AddService.css'
const AddServices = () => {
    const[loggedInUser , setLoggedInUser]= useContext(UserContext);
    
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
        formData.append('serviceTitle',info.serviceTitle)
        formData.append('description',info.description)
        formData.append('serviceName',info.serviceName)
        fetch('https://murmuring-journey-43171.herokuapp.com/addService', {   
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
                    <img src={loggedInUser.img} style={{width:"50px",borderRadius:'50%'}} alt=""/>
                <h6 className="mt-3 ml-3">{loggedInUser.firstName}</h6>
                </div>
            </div>
            <div className="row mt-5">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
            <form onSubmit={handleSubmit}>
                            <div className="form-group w-50">
                            
                            <input type="text" className="form-control" id="" placeholder="Enter Service Title" name="serviceTitle" onBlur={handleBlur} required/>
                            </div>
                            <div className="form-group w-50">
                            <input type="text" className="form-control" id="" placeholder="Enter Service Name in lowercase without spacing" name="serviceName" onBlur={handleBlur} required/>
                            </div>

                            <div className="form-row">
                            <div className=" col form-group">
                           
                           <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Description" onBlur={handleBlur} name="description"  required>

                           </textarea>
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
        </div>
        </div>
    );
};

export default AddServices;