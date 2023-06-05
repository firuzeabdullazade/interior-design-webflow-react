import './ProfilePage.scss';
import { Link } from 'react-router-dom';
import IN from '../../../assets/icons/in.svg';
import React from 'react';
import email from '../../../assets/images/contacticon.png';
import fb from '../../../assets/icons/fb.png';
import insta from '../../../assets/icons/instagram.svg';
import phone from '../../../assets/images/contacticon2.png';
import pp from '../../../assets/images/user.png';
import ppbanner from '../../../assets/images/profilepagebanner.jpg';
import tw from '../../../assets/icons/tw.png';
import web from '../../../assets/images/contacticon3.png';
export const ProfilePage = () => {
  return (
    <>
      <div className="about-intro">
        <img src={ppbanner} alt="bg" />
        <div className="about-text">
          <p>Your Profile</p>
        </div>
      </div>
      <div className="userdetails">
        <div className="image">
          <img src={pp} alt="" />
        </div>
        <div className="sub-content">
          <div className="name-job">
            <p className="name">John Smith</p>
            <p className="job">Designer</p>
          </div>
          <div className="aboutuser">
            <p className="usertext">
              Dynamic and versatile interior designer with a passion for creating captivating spaces that
              merge functionality with aesthetic excellence. With a deep understanding of design principles
              and a keen eye for detail, I specialize in transforming ordinary spaces into extraordinary
              environments that leave a lasting impression.I excel in collaborating with clients to bring
              their visions to life, delivering remarkable designs that exceed expectations.
            </p>
            <div className="usercontact">
              <img src={email} alt="" />
              <p className="contactdetails">john@gmail.com</p>
            </div>
            <div className="usercontact">
              <img src={phone} alt="" />
              <p className="contactdetails">+1 (378) 400-1234</p>
            </div>
            <div className="usercontact">
              <img src={web} alt="" />
              <p className="contactdetails">www.johnspage.com</p>
            </div>
            <div className="usericons">
              <Link to={''}><img src={insta} alt="" /></Link>
              <Link to={''}><img src={tw} alt="" /></Link>
              <Link to={''}> <img src={IN} alt="" /></Link>
              <Link to={''}><img src={fb} alt="" /></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
