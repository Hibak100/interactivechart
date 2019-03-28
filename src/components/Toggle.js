import React, { Component } from 'react';
import '../App.css';
import PropTypes from "prop-types";

class Toggle extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: "t1",
    };
  }

  handleChange = event => {
    const value =  event.target.id;
    this.setState({ value });
    this.props.toggleClick(value);
  };

  render() {
    return (
      <div className="Toggle">
      <button id={"t1"}   className="Button" onClick={this.handleChange}> Table 1 </button>
      <button id={"both"} className="Button" onClick={this.handleChange}> Both Tables </button>
      </div>
    );
  }
}

Toggle.propTypes = {
  toggleClick: PropTypes.func
};



export default Toggle;

