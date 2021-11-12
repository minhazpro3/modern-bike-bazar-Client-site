import React from 'react';

const Offers = () => {
    return (
        <div className="my-5 text-center">
            <h4 className="my-3 text-center" style={{color: 'chocolate'}}>COMING SOON, PRE ORDER 10% CASH BACK</h4>
            <div className="row ">
                <div className="col-md-6 ">
                    <img style={{width: '100%', height: '400px', ms: '2px', marginTop: '3px'}} src="https://resources.mynewsdesk.com/image/upload/ar_16:9,c_fill,dpr_auto,f_auto,g_auto,q_auto,w_864/jfjzwym3vr4emheou6vv.jpg" alt="" />
                    <small className="text-success">YAMAHA W-12 BOTH BIKE</small>
                </div>
                <div className="col-md-6 ">
                <img style={{width: '100%',height: '400px', ms: '2px', marginTop: '3px'}} src="https://i.ibb.co/GQSK9k7/image.png" alt="" />
                <small className="text-success">HONDA CRB29 SPORTS LADY</small>
                </div>
            </div>
           
        </div>
    );
};

export default Offers;