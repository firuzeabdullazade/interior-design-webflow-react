import React from 'react';
import './BlogDetailsPage.scss';
import backImage from '../../../assets/images/blog detail background.png';


export const BlogDetailsPage = () => {
  return (
    <>
      <div className="hero-back">
        <div className="intro">
          <h1>Blog Details</h1>
        </div>
        <img src={backImage} alt="" />
      </div>
      <div className="blog-container">
      </div>
    </>
  );
};
