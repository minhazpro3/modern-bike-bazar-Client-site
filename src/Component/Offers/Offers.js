import React from 'react';
import { Button } from 'react-bootstrap';

const Offers = () => {
    return (
        <div className="my-5 text-center m-0 p-0 overflow-hidden ">
             <h1 className="my-3 text-center" >Flexibility, Agility &<br/> Freedom to go Anywhere, <br/> Anytime</h1>
            <h4>--------------------------</h4>
           <div className="container my-5">
               
           
            <div className="row  d-flex align-items-center">
                <div className="col-md-6 col-lg-6 ">
                    <img  style={{width: '450px'}}  src="https://i.ibb.co/bJkv1f1/renroll-1411816043.webp" alt="" />
                   
                </div>
                <div className="col-md-6  text-start">
                <h4>Get Free Helmets</h4>
                <p>Aiusmod tempor incididunt labore loremy enim veniams lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis.</p>

                <br/>
                <p>Nostrud exercita aliquip ex ea consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                <Button className="bg-info py-1 px-3 border-0 text-black">more...</Button>
                </div>
            </div>
           </div>
           
        </div>
    );
};

export default Offers;