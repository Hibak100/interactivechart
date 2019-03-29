import React from 'react';
import {mount, shallow} from 'enzyme';
import Container from "./Container";


describe('Container', () => {
  const data = {
    "t1":[{ "name": "p", "value": 2}],
    "t2":[{ "name": "p", "value": 1}]
  };

  it('should render chart + toggle', () => {
    const component = shallow(<Container data={data}/>);
    expect(component.find("Toggle").exists()).toBe(true);
    expect(component.find("Chart").exists()).toBe(true);
  });

  it('should change data when toggle is clicked', () => {
    const t1 = data.t1;
    const component = mount(<Container data={data}/>);
    expect(component.state().data).toEqual(t1);
    component.find("#both").simulate('click');
    expect(component.state().data).not.toEqual(t1);
  });

});
