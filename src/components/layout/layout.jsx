import React from 'react';
import Helmet from 'react-helmet';
import { Waypoint } from 'react-waypoint';
import { Col, Image, Row } from 'react-bootstrap';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { siteMetadata } from '../../../gatsby-config';
import Footer from '../footer/footer';

import '../../scss/gatstrap.scss';
import headerImage from '../../../content/images/header.png';
import logoImage from '../../../content/images/logo.png';
import Navibar from '../navibar/navibar';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false,
    };
  }

  handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }));
  };

  handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  };

  // _handleOnHomeClick = () => {
  //   navigate('/');
  // };

  render() {
    const { location, children } = this.props;
    const { stickyNav } = this.state;
    return (
      <div>
        <Helmet title="CONF2021" />
        <header
          id="header"
          className="container"
          style={{
            position: 'relative',
            top: 0,
          }}
        >
          <span className="logo">
            <Image src={headerImage} alt="" fluid />
          </span>
          <Row
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              height: '90%', // backgroundColor: "red"
            }}
          >
            <Col>
              <Link to="/">
                <Image src={logoImage} alt="" fluid />
              </Link>
            </Col>
            <Col />
            <Col />
          </Row>
        </header>
        <Waypoint
          invisible
          onEnter={this.handleWaypointEnter}
          onLeave={this.handleWaypointLeave}
        />
        <Navibar
          title={siteMetadata.title}
          location={location}
          sticky={stickyNav}
        />
        {children}
        <Footer title={siteMetadata.title} author={siteMetadata.author} />
      </div>
    );
  }
}

Layout.propTypes = {
  location: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Layout;
