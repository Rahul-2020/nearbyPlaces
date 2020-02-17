import React from 'react';
import { shallow } from 'enzyme';

import Card from './card';
import {findByTestAttr, checkProps} from '../utils/utilstest';

const setUp = (props={}) => {
  const component = shallow(<Card {...props}/>);
  return component
}

describe("Card Component", () => {
  
  describe('Have props', () => {
    let component;
    beforeEach(() => {
      const props = {
        data: {
          id: '123',
          name: 'Town Cutier',
          category: 'Arts & Crafts Store',
          address: {
            line1: '1500 Market St',
            line2: 'San Francisco, CA 94102',
            country: 'United States'
          }
        }
      }
      component = setUp(props);
    });
    
    it("should render a title without error", () => {
      const titleElement = findByTestAttr(component, 'card-title');
      expect(titleElement.length).toBe(1);
    })

    it("should render a category without error", () => {
      const categoryElement = findByTestAttr(component, "card-category");
      expect(categoryElement.length).toBe(1);
    });

    it("should render a address without error", () => {
      const addressElement = findByTestAttr(component, "card-address");
      expect(addressElement.length).toBe(1);
    });
  });

  describe('Have No props', () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });
    
    it("should not render a component without props", () => {
      const titleElement = findByTestAttr(component, 'card-title');
      expect(titleElement.length).toBe(0);
    });
  });

  describe("Checking PropTypes", () => {
    it("should not throw a warning", () => {
      const expectedProps = {
        id: '123',
        name: 'Town Cutier',
        category: 'Arts & Crafts Store',
        address: {
          line1: '1500 Market St',
          line2: 'San Francisco, CA 94102',
          country: 'United States'
        }
      }
      
      const propsError = checkProps(Card, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

})