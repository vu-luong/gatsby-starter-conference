import React from 'react';
import { Link } from 'gatsby';

import './style.scss';

const Footer = ({ title }) => (
  <div className="footer">
    <div className="container">
      <hr className="border-primary" />
      <p>
        {title}
        <Link to="https://www.gatsbyjs.com/">
          <br />
          {/* <strong>By {author}</strong> */}
          <strong>
            Powered by @<u>Gatsby</u>
          </strong>
        </Link>
      </p>
    </div>
  </div>
);

export default Footer;
