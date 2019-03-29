import React from 'react';
import {mount, shallow} from 'enzyme';
import Toggle from "./Toggle";

describe('Toggle', () => {

  it('should render 2 buttons', () => {
    const component = shallow(<Toggle/>);
    expect(component.find("button").length).toBe(2);
  });

  it('should change value when button is clicked', () => {
    const component = mount(<Toggle toggleClick={jest.fn()}/>);
    expect(component.state().value).toEqual("t1");
    component.find("#both").simulate('click');
    expect(component.state().value).toEqual("both");
  });


});
