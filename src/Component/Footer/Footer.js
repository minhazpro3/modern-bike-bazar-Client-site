import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-light my-5 py-5 text-center' style={{fontFamily: "'Poppins', sans-serif" }}>
           <div className='container'>
          <div>
            <div className="d-md-flex gap-3">
              <input className="w-75 bg-primary border-0 border-white text-white px-3 rounded-3" type="text"  placeholder="Search"  />
              <h2>Search Dream</h2>
            </div>
          </div>
           <div className='row align-items-center'>
            <div className='col-md-3 pe-5 text-start' >
            <img style={{width: '150px'}} src="https://i.ibb.co/sKPDp3L/Motorcycle-Racing-Logos-removebg-preview.png" alt=""/>
            <div style={{fontFamily: "'Poppins', sans-serif", paddingTop: '2px'  }}>
                <p>We hope you like these collections of MotorCycle Quotes</p>
                <br/>
                <button className='border-0 fw-bold ' style={{color: 'hotpink'}}> Read more <i className="fas fa-arrow-right px-2 "></i> </button>
            </div>
            <div className="d-flex gap-3 mt-2" style={{color: 'hotpink'}}>
             <a target="_blank" href="https://www.facebook.com"><h3><i className="fab fa-facebook"></i></h3></a>
                <a target="_blank" href="https://www.twitter.com"><h3><i className="fab fa-twitter"></i></h3></a>
                <a target="_blank" href="https://www.linkedin.com"><h3><i className="fab fa-linkedin-in"></i></h3></a>
                <a target="_blank" href="https://www.instagram.com"><h3><i className="fab fa-instagram"></i></h3></a>
            </div>
            </div>
            <div className='col-md-3 fw-bold '>
              <h3 className="m-0">Company</h3>
              <div className="mt-5">
                <p className="m-0">About Us</p>
                <p className="m-0">Service</p>
                <p className="m-0">Case Studies</p>
                <p className="m-0">Blog</p>
                <p className="m-0">Contact</p>
              </div>

            </div>
            <div className='col-md-3 '>
            <h3 className="m-0">Contact </h3>
            <div className='d-flex align-items-center gap-3'>
           <h4><i className="far fa-envelope pt-3 text-primary" ></i></h4>
           <p>minhazfr8@gmail.com</p>
           </div>
           <div className='d-flex align-items-center gap-3'>
           <h4><i className="fas fa-phone text-primary" ></i></h4>
           <p>+(642) 342 762 44</p>
           </div>
           <div className='d-flex align-items-center gap-3'>
           <h4><i className="fas fa-map-marker-alt text-primary"></i></h4>
           <p>442 Belle Terre St Floor 7, San Francisco, AV 4206</p>
           </div>
            </div>
            <div className='col-md-3' >
            <img style={{width: '100%', height: '18rem'}} src="https://www.pngitem.com/pimgs/m/47-479479_payment-methods-in-bangladesh-hd-png-download.png" alt="" />
            </div>
           
            </div>
           </div>
        </div>
    );
};

export default Footer;