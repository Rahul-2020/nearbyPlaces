import React from 'react';
import { shallow } from 'enzyme';

import ShowPlace from '../show_places';
import {findByTestAttr, configureStore} from '../../../utils/utilstest';

const setUp = (initialState={}) => {
  const store = configureStore(initialState);
  const component = shallow(<ShowPlace store={store} />).childAt(0).dive();
  return component;
}

describe("ShowPlace Component", () => {
  let component;
  
  beforeEach(() => {
    const initialState = {
      place: {
        data:[
        {
          id: '123',
          name: 'Town Cutier',
          category: 'Arts & Crafts Store',
          address: {
            line1: '1500 Market St',
            line2: 'San Francisco, CA 94102',
            country: 'United States'
          }
        },
        {
          id: '124',
          name: 'Town Cutier',
          category: 'Arts & Crafts Store',
          address: {
            line1: '1500 Market St',
            line2: 'San Francisco, CA 94102',
            country: 'United States'
          }
        }
      ]}
    }
    component = setUp(initialState);
  });

  it("should render a place contianer without error", () => {
    const placeContainer = findByTestAttr(component, "place-container");
    expect(placeContainer.length).toBe(1);
  });
})