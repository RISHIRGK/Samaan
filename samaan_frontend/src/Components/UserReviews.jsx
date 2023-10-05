import React, { useState } from "react";

const UserReviews = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="UserReviewOuter">
      <div>
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={
                index <= (hover || rating) ? "StarReview on" : "StarReview off"
              }
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="starReview">&#9733;</span>
            </button>
          );
        })}
      </div>
      <div className="UserReviewHeader">
        <div className="UserPhoto"></div>
        <p className="UserName">Username Here</p>
      </div>
      <div className="UserReviewStatement">
        <p>description goes here</p>
      </div>
    </div>
  );
};

export default UserReviews;
