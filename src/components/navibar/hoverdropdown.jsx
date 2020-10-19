import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import './style.scss';

class HoverDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  handleMouseEnter = () => {
    this.setState(() => ({ show: true }));
  };

  handleMouseLeave = () => {
    this.setState(() => ({ show: false }));
  };

  handleMouseClick = () => {
    const { show } = this.state;
    this.setState(() => ({ show: !show }));
  };

  render() {
    const { id, title, children } = this.props;
    const { show } = this.state;

    return (
      <NavDropdown
        className="nav-dropdown"
        id={id}
        title={title}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.handleMouseClick}
        show={show}
      >
        {children}
      </NavDropdown>
    );
  }
}

export default HoverDropdown;
