import React from 'react';
import {shallow} from 'enzyme';
import Chart from "./Chart";

describe('Chart', () => {
  const data = [
    {"name": "foo", "value": 2},
    {"name": "bar", "value": 3},
    {"name": "baz", "value": 10}
    ];

  it('should render Pie with 3 cells', () => {
    const component = shallow(<Chart data={data}/>);
    expect(component.find("Cell").length).toBe(3);
  });

  it('should update and add new state when cell is clicked', () => {
    const component = shallow(<Chart data={data}/>);
    expect(component.state()).toEqual({"strokeWidth": 1});
    component.find("Cell").at(0).simulate("click");
    expect(component.state()).toEqual({
      "highlight": {"foo": 3},
      "strokeWidth": 1
    });
    component.find("Cell").at(2).simulate("click");
    expect(component.state()).toEqual({
      "highlight": {"baz": 3},
      "strokeWidth": 1
    });
  });


});
