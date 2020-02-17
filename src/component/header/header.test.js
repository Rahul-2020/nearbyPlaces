import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';
import {findByTestAttr} from '../../utils/utilstest';

const setUp = (props={}) => {
  const component = shallow(<Header {...props}/>);
  return component
}

describe("Header Component", () => {
  let component;
  
  beforeEach(() => {
    component = setUp();
  });

  it("should render without error", () => {
    const headerElement = findByTestAttr(component, 'header');
    expect(headerElement.length).toBe(1);
  })

  it("should render a logo without error", () => {
    const logoElement = findByTestAttr(component, "header-logo");
    expect(logoElement.length).toBe(1);
  });

})