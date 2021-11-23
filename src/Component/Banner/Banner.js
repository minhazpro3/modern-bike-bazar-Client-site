import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <Card className=" text-white border-0 ">
        <Card.Img src="https://i.ibb.co/Y8C5SR4/animated-image-of-motorcycle-lights-for-better-visibility.gif" />
        <Card.ImgOverlay className="text-black   img-fluid">
         
        </Card.ImgOverlay>
      </Card>
    );
};

export default Banner;