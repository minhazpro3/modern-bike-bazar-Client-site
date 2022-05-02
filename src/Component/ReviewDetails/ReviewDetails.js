import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';

const ReviewDetails = ({reviewItem}) => {
    
    const {name,description,photo,ratting}=reviewItem;
    
   
    return (
        <Card style={{height: '350px'}}>
        <div className="item ">
        <div className="shadow-effect">
         
            {photo? <img className="img-circle" src={photo} alt=""/>:
            <img className="img-circle" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt=""/>}
            <p>{name}</p>
         
           <Rating className="text-warning  " initialRating={ratting}
            readonly 
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            ></Rating>
          
            <br/>
            
            <small>{description.slice(0,80)}</small>
        </div>
        
    </div>
    </Card>
    );
};

export default ReviewDetails;