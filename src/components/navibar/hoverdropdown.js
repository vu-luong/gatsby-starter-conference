import React from "react"
import { NavDropdown } from "react-bootstrap"

class HoverDropdown extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      show: false,
      redirect: false
    }
  }

  _handleMouseEnter = () => {
    this.setState(() => ({ show: true }))
    // console.log("On Mouse Enter")
  }

  _handleMouseLeave = () => {
    // console.log("On Mouse Leave")
    this.setState(() => ({ show: false }))
  }

  _handleMouseClick = () => {
    // console.log("on click" + this.props.href)
    // navigate(this.props.href)
    this.setState(() => ({ show: !this.state.show }))
  }

  render() {

    return (
      <NavDropdown id={this.props.id} title={this.props.title}
                   onMouseEnter={this._handleMouseEnter}
                   onMouseLeave={this._handleMouseLeave}
                   onClick={this._handleMouseClick}
                   show={this.state.show}
                   style={{
                     marginLeft: 0,
                     marginRight: 4
                   }}
      >
        {this.props.children}
      </NavDropdown>
    )
  }

}

export default HoverDropdown
