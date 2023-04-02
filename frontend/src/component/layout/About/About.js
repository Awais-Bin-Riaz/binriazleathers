import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";

import Logo from "../../../images/logo.jpg"
import Daraz from "../../../images/daraz.png"



const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.daraz.pk/shop/leathers-good-1623780458/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={Logo}
              alt="Founder"
            />
            <Typography>Riaz And Sons Pvt. Ltd.</Typography>
            <h4>Also, Visit Our Shop at 
            <Button onClick={visitInstagram} color="primary">
              <img height={28} src={Daraz}></img>
            </Button></h4>
            <span>You Can Find Your Leather Accesories with a reasonable price here at <b> LEATHER GOODS</b></span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Social Networks</Typography>
            <a
              href="https://www.youtube.com/channel/UCO7afj9AUo0zV69pqEYhcjw"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>
            <a
              href="https://www.facebook.com/riazandsons8/"
              target="blank"
            >
              <FacebookIcon className="facebookSvgIcon" />
            </a>
            <a href="https://www.instagram.com/leather_goods71/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
            <a href="https://twitter.com/LeatherGoods20" target="blank">
              <TwitterIcon className="twitterSvgIcon" />
            </a>
            <a href="https://www.pinterest.com/riazandsons8/" target="blank">
              <PinterestIcon className="pinterestSvgIcon" />
            </a>          
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
