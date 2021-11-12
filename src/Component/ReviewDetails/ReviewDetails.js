import React from 'react';
import Rating from 'react-rating';
import useAuth from '../Hooks/useAuth';

const ReviewDetails = ({reviewItem}) => {
    const {user}=useAuth()
    
    const {name,description,photo,ratting}=reviewItem;
    
   
    return (
        <div className="item ">
        <div className="shadow-effect">
         
            {photo? <img className="img-circle" src={photo} alt=""/>:
            <img className="img-circle" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt=""/>}
            <p>{name}</p>
            <Rating className="text-warning " initialRating={ratting}
            readonly 
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            ></Rating>
            
        </div>
        <div className="testimonial-name">
            
            <small>{description}</small>
        </div>
    </div>
    );
};

export default ReviewDetails;