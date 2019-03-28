import React, { Component } from 'react';
import '../App.css';
import Chart from "./Chart";
import Toggle from "./Toggle";
import PropTypes from "prop-types";
import {transform} from "../helpers/TransformData";

class Container extends Component {
  constructor(props){
    super(props);
    this.state = {
        data: props.data.t1,
        transformed: transform(props.data)
    }
  }

  toggleClick = (value) =>{
    this.setState({
      data: value === "t1" ? this.props.data.t1 : this.state.transformed
    })
  };

  render() {
    return (
      <div className="Container">
        <Toggle toggleClick={(val)=> this.toggleClick(val)}/>
        <Chart data={this.state.data}/>
      </div>
    );
  }
}

Container.propTypes = {
  data: PropTypes.object
};


export default Container;

