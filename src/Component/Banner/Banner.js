import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <Card className=" text-white border-0 ">
        <Card.Img src="https://www.heromotocorp.com/en-in/uploads/home_banner/20211014095625-banner-7.jpg" />
        <Card.ImgOverlay className="text-black   img-fluid">
          <Card.Text className="  container  ">
           <div className="row">
             <div className="col-md-6 d-flex justify-content-center  ">
              <div className="">
              <h3>FIND THE BIKE OF <br/> YOUR CHICE!!!</h3>
             <Link to="/moreProducts"><Button  style={{backgroundColor: 'hotpink'}} className="  fw-bold border-0">MORE COLLECTION  <i className="fas fa-arrow-right px-2 "></i> </Button></Link>
              </div>
             </div>
             <div className="col-md-6">

             </div>
           </div>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    );
};

export default Banner;