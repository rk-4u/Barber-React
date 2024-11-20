import React from "react";
import './SocialMediaFooter.css'; 
import logo from '../Images/3_big6-768x591-removebg-preview.png'
import {
  Footer,
  FooterBrand,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const SocialMediaFooter = () => {
  return (
    <Footer className="footer-container">
      <div className="footer-grid footer-grid-md">
        <div className="FooterBrand">
          <FooterBrand
            href="/"
            src={logo}
            alt="Flowbite Logo" 
          />
          <h1>Barber Shop</h1>
        </div>
        <div className="footer-section">
          <div>
            <FooterTitle className="footer-title" title="About" />
            <FooterLinkGroup col className="footer-link-group">
              <FooterLink href="#">Flowbite</FooterLink>
              <FooterLink href="#">Tailwind CSS</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle className="footer-title" title="Follow us" />
            <FooterLinkGroup col className="footer-link-group">
              <FooterLink href="#">Github</FooterLink>
              <FooterLink href="#">Discord</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle className="footer-title" title="Legal" />
            <FooterLinkGroup col className="footer-link-group">
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms & Conditions</FooterLink>
            </FooterLinkGroup>
          </div>
        </div>
      </div>
      <FooterDivider className="footer-divider" />
      <div className="footer-copyright">
        <div className="FooterTitle"> <h3>  &copy; 2024  <i>Barber Shop™ </i></h3> </div>

        <div className="footer-icons">
          <FooterIcon href="#" icon={BsFacebook} />
          <FooterIcon href="#" icon={BsInstagram} />
          <FooterIcon href="#" icon={BsTwitter} />
          <FooterIcon href="#" icon={BsGithub} />
          <FooterIcon href="#" icon={BsDribbble} />
        </div>
      </div>
    </Footer>
  );
};

export default SocialMediaFooter;
