import React from 'react';
import { shallow } from 'enzyme';
import Location from '../location';

const setUp = (props={}) => {
  const component = shallow(<Location {...props}/>);
  return component
}

describe("Location Component", () => {
  let component;
  
  beforeEach(() => {
    component = setUp();
  });

  it("should render without error", () => {
    expect(component.length).toBe(1);
  });

})