import { IconButton } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
const Sidebar = () => {
    return (
        <div>
            <Link to="/admin-panel/allServices" style={{textDecoration:"none"}} >
                    <h6 className="text-dark ">
                     <IconButton ><AssignmentIcon className="text-dark " /> </IconButton>
                      Service List
                     </h6>
                     
                    </Link>
                
                    <Link to="/admin-panel/addServices" style={{textDecoration:"none"}}>                    
                    <h6 className="text-dark mt-3">
                    <span className='font-weight-bold'>+</span> Add Service 
                    </h6>
                    </Link>
                    <Link to="/admin-panel/makeAdmin" style={{textDecoration:"none"}}>                    
                    <h6 className="text-dark mt-3">
                    <IconButton><PersonAddIcon className="text-dark"/></IconButton>
                     Make Admin
                    </h6>
                    </Link> 
        </div>
    );
};

export default Sidebar;