import React, {Component} from 'react';
import '../App.css';
import PropTypes from 'prop-types'
import {Cell, Legend, Pie, PieChart} from 'recharts'

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strokeWidth: 1
    }
  }

  highlight = (name) => {
    this.setState({
      highlight: {[name]: 3}
    })
  };

  render() {
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, value}) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {value}
        </text>
      );
    };
    const data = this.props.data;
    return (
      <div className="Chart">
          <PieChart height={400} width={500}>
            <Legend onClick={({value}) => this.highlight(value)}/>
            <Pie data={data}
                 dataKey="value"
                 innerRadius={50}
                 outerRadius={120}
                 labelLine={false}
                 label={renderCustomizedLabel}>
              {
                data.map((entry, idx) => {
                  const strokeWidth = this.state.highlight && this.state.highlight[entry.name] ? this.state.highlight[entry.name] : this.state.strokeWidth;
                  return (
                    <Cell key={`cell-${idx}`} fill="#8884d8" strokeWidth={strokeWidth}
                          onClick={() => this.highlight(entry.name)}/>
                  )
                })
              }
            </Pie>
          </PieChart>
      </div>
    );
  }
}

Chart.propTypes = {
  data: PropTypes.array
};

export default Chart;

