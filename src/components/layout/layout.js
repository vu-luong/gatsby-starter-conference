import React from "react"
import Navibar from "../navibar/navibar"
import { siteMetadata } from "../../../gatsby-config"
import Footer from "../footer/footer"

import "../../scss/gatstrap.scss"
import { Col, Image, Row } from "react-bootstrap"
import headerImage from "../../../content/images/header.png"
import logoImage from "../../../content/images/logo.png"
import { Waypoint } from "react-waypoint"
import { Link, navigate } from "gatsby"
import Helmet from "react-helmet"


class Layout extends React.Component {
  constructor(props) {

    super(props)
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  _handleOnHomeClick = () => {
    navigate("/")
  }


  render() {
    return (
      <div>
        <Helmet title="EDOC2021" />
        <header id="header" className="container" style={{
          position: "relative",
          top: 0
        }}>
          <span className="logo"><Image src={headerImage} alt="" fluid /></span>
          <Row style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "90%"
            // backgroundColor: "red"
          }}>

            <Col>
              <Link to="/">
                <Image
                  src={logoImage} alt="" fluid />
              </Link>
            </Col>
            <Col />
            <Col />
          </Row>

        </header>
        <Waypoint
          invisible
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <Navibar title={siteMetadata.title} location={this.props.location} sticky={this.state.stickyNav} />
        {this.props.children}
        <Footer title={siteMetadata.title} author={siteMetadata.author} />
      </div>
    )
  }
}

export default Layout