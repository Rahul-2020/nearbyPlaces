import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const setUp = (props={}) => {
  const component = shallow(<App {...props}/>);
  return component
}

describe("app container", () => {
  let component;
  
  beforeEach(() => {
    component = setUp();
  });

  it("should render without error", () => {
    expect(component.length).toBe(1);
  })
})
