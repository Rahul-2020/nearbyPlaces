import React from 'react';
import { shallow } from 'enzyme';

import {findByTestAttr, configureStore} from '../../../utils/utilstest';
import LocationInput from '../location_input';


const setUp = (initialState={}) => {
  const store = configureStore(initialState);
  const component = shallow(<LocationInput store={store}/>).dive();

  return component;
}

describe("Location Input" , () => {
  let component;
  const mockDispatchProp = jest.fn();

  beforeEach(() => {
    component = setUp();
  })

  it("should render input text without error", () => {
    const cityNameInput = findByTestAttr(component, "city-input");
    expect(cityNameInput.length).toBe(1);
  });

  it("should render submit button without error", () => {
    const submitButton = findByTestAttr(component, "submit-button");
    expect(submitButton.length).toBe(1);
  });

  it("should update input text value", () => {
    const cityNameInput = findByTestAttr(component, "city-input");
    cityNameInput.simulate('change', {
      target: {value: 'sf'}
    })
    expect(cityNameInput.length).toBe(1);
  });

});
