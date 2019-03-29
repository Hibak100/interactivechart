import React, { Component } from 'react';
import '../App.css';
import PropTypes from "prop-types";

class Toggle extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: "t1"
    };
  }

  handleChange = event => {
    const value =  event.target.id;
    if(value !== this.state.value) {
      this.setState({ value });
      this.props.toggleClick(value);
    }
  };

  render() {
    return (
      <div className="Toggle">
      <button id={"t1"}   className={`Button ${this.state.value === "t1" && 'Active'}`} onClick={this.handleChange}> Table 1 </button>
      <button id={"both"} className={`Button ${this.state.value === "both" && 'Active'}`} onClick={this.handleChange}> Both Tables </button>
      </div>
    );
  }
}

Toggle.propTypes = {
  toggleClick: PropTypes.func
};

export default Toggle;

