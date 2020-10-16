import React from 'react';
import frame from '../../../images/logos/Frame.png'
const HeaderBody = () => {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-4 mt-5 ">
                    <h1 className="font-weight-bold"> Let's Grow Your Team To The Next Level</h1>
                    <small >Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quisquam accusamus consectetur quos. Sequi, porro.</small>

                        <br/>

                    <button className="btn btn-dark mt-5">Hire Us</button>
                </div>

                <div className="col-md-7 offset-md-1 d-block">
                    <img className="img-fluid d-block" src={frame} alt="" style={{width:'500px'}}/>
                </div>
            </div>
        </div>
    );
};

export default HeaderBody;