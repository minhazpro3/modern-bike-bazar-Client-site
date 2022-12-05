import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ReviewDetails from "../ReviewDetails/ReviewDetails";
import "./ReviewPart.css";

const ReviewPart = () => {
  const [reviewData, setReviewData] = useState([]);
  const [Ref, setRef] = useState(false);

  //Owl Carousel Settings
  const options = {
    // loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    // dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    // nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };

  useEffect(() => {
    fetch(
      "https://modern-bike-bazar-server-site-production.up.railway.app/reviewGet"
    )
      .then((res) => res.json())
      .then((data) => {
        setReviewData(data);
        setRef(true);
      });
  }, [Ref]);
  return (
    <section
      id="testimonial"
      className="testimonials pt-70 pb-70 bg-light container"
    >
      <div className="container my-5 ">
        <div className="text-center pt-5 text-primary">
          <h4 className=" r">OUR CUSTOMER REVIEW</h4>
          <h3 className="sectionTitle">What Our Clients are Saying?</h3>
        </div>

        <div className="row ">
          <div className="col-md-12 ">
            <OwlCarousel
              id="customer-testimonoals"
              className="owl-carousel owl-theme "
              {...options}
            >
              {reviewData.map((reviewItem) => {
                return (
                  <ReviewDetails key={reviewItem._id} reviewItem={reviewItem} />
                );
              })}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewPart;
