import React from 'react';
import { Link } from 'react-router-dom';
import './ExtraPart.css'

const ExtraPart = () => {
    return (
        <div className="">
            <div className="row my-5 container-fluid mx-auto ">
                <div className="col-md-6 bg-light leftPart leftText border  " >
                    <div className="pt-5 ps-5 " >
                        <h1 className="fw-bold">Women's Special Motorcycle Sale!</h1>
                        <p className="scoping">Scoping</p>
                        <p className="fw-bold">Explore wide collections of Bike for women </p>

                        <div className="d-flex gap-2 mb-3">
                            <img style={{ width: "100px", height: '70px' }} className="rounded-2 " src="https://i.ibb.co/YbKCSqR/biker-girl-leather-jacket-motorcycle-564276-6682.jpg" alt="bike pic" />
                            <img style={{ width: "100px", height: '70px' }} className="rounded-2 " src="https://i.ibb.co/bz26KGq/lineup-cvolimited.png" alt="bike pic" />
                            <img style={{ width: "100px", height: '70px' }} className="rounded-2 " src="https://i.ibb.co/wQmnYkY/shapely-smiling-girl-with-black-leather-backpack-enjoying-sunlight-spending-time-outdoor-slim-young.jpg" alt="bike pic" />

                        </div>
                        <Link to="/moreProducts"> <button className="btn btn-success my-3" >Get more products</button> </Link>
                       
                    </div>


                </div>
                <div className="col-md-6 px-0 leftPart leftText border ">
                    <div className="" >

                        <img className=" img-fluid" src="https://im.indiatimes.in/media/content/2017/Jun/_32380d9a-cd5c-11e5-9f1f-e42e029c5977_1498120660_725x725.jpg" alt="images" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraPart;