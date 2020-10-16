import React from 'react';
import './ContactUs.css'
const ContactUs = () => {
    return (
        <div style={{backgroundColor: '#FBD062',height:"700px"}} className="mt-5 contactForm" id="contactUs">
            <div className="row pt-5 " >
            <div className="col-md-6 text-left ml-5 pl-5 mt-3" style={{maxWidth:"300px"}}>
                <h5 className='font-weight-bold mb-4 '>Let us handle your project, professionally.</h5>
                <small className="text-secondary ">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</small>
            </div>


            <div className="col-md-6 p-5 ml-auto" >
                <form>
                <div class="form-group">
                    
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Email Address"/>
                </div>

                <div class="form-group">
                    
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name/Company's Name"/>
                </div>
                
                <div class="form-group">
                    
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="Your Message"></textarea>
                </div>
                <input type="submit" value="SEND" className="btn btn-dark pr-5 pl-5"/>
                </form>

            </div>
        </div>
        <div className='pt-5 text-center text-secondary'>
        <small>copyright Orange labs 2020</small>
        </div>
        </div>
    );
};

export default ContactUs;