import React from "react";
import "./style.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__links">
          <ul className="footer__links-list">
            <li className="footer__links-list-item">Countries</li>
            <li className="footer__links-list-item">Regions</li>
            <li className="footer__links-list-item">Cities</li>
            <li className="footer__links-list-item">Districts</li>
            <li className="footer__links-list-item">Airports</li>
            <li className="footer__links-list-item">Hotels</li>
          </ul>
          <ul className="footer__links-list">
            <li className="footer__links-list-item">Homes </li>
            <li className="footer__links-list-item">Apartments </li>
            <li className="footer__links-list-item">Resorts </li>
            <li className="footer__links-list-item">Villas</li>
            <li className="footer__links-list-item">Hostels</li>
            <li className="footer__links-list-item">Guest houses</li>
          </ul>
          <ul className="footer__links-list">
            <li className="footer__links-list-item">Unique places to stay </li>
            <li className="footer__links-list-item">Reviews</li>
            <li className="footer__links-list-item">
              Unpacked: Travel articles
            </li>
            <li className="footer__links-list-item">Travel communities </li>
            <li className="footer__links-list-item">
              Seasonal and holiday deals
            </li>
          </ul>
          <ul className="footer__links-list">
            <li className="footer__links-list-item">Car rental </li>
            <li className="footer__links-list-item">Flight Finder</li>
            <li className="footer__links-list-item">Restaurant reservations</li>
            <li className="footer__links-list-item">Travel Agents </li>
          </ul>
          <ul className="footer__links-list">
            <li className="footer__links-list-item">Curtomer Service</li>
            <li className="footer__links-list-item">Partner Help</li>
            <li className="footer__links-list-item">Careers</li>
            <li className="footer__links-list-item">Sustainability</li>
            <li className="footer__links-list-item">Press center</li>
            <li className="footer__links-list-item">Safety Resource Center</li>
            <li className="footer__links-list-item">Investor relations</li>
            <li className="footer__links-list-item">Terms & conditions</li>
          </ul>
        </div>
        <p>Copyright © 2022 Ahmed™. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
