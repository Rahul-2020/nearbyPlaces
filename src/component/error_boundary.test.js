import React from 'react';
import { shallow, mount } from 'enzyme';

import ErrorBoundary from './error_boundary';
import {findByTestAttr, checkProps} from '../utils/utilstest';
import { isMainThread } from 'worker_threads';

const setUp = (props={}) => {
  const component = shallow(<ErrorBoundary {...props}/>);
  return component
}

describe("Error Boundary", () => {
  let component = setUp();

  it("should not render a error boundary component", () => {
    const errorElement = findByTestAttr(component, 'error-boundary');
    expect(errorElement.length).toBe(0);
  });

  describe("Display Error Boundary message", () => {
    const Something = () => null;
    it("should display error message if child component throw error", () => {
      const wrapper = mount(
        <ErrorBoundary>
          <Something />
        </ErrorBoundary>
      );
      const error = new Error('test');

      wrapper.find(Something).simulateError(error);
      const errorElement = findByTestAttr(wrapper, 'error-boundary');
      expect(errorElement.length).toBe(1);
    });
  });
});