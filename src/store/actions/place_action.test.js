import moxios from 'moxios';

import { getNearByPlaces } from './places_action';
import { configureStore } from '../../utils/utilstest';

describe ("fetch nearby places", () => {
  
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  })

  test("store is updated correctly", () => {
    const inputState = [{
      id: '123',
      name: 'Town Cutier',
      categories: [
        {
          "name": "Arts & Crafts Store",
        }
      ],
      location: {
        formattedAddress: [
          "1500 Market St",
          "San Francisco, CA 94102",
          "United States"
        ]
      }
    },
    {
      id: '124',
      name: 'Grand Park- Dog Run',
      categories: [
        {
          "name": "Dog Run",
        }
      ],

      location: {
        formattedAddress: [
          "60 W 22nd St (5th and 6th Avenue)",
          "San Francisco, CA 94105",
          "United States"
        ]
      }
    }];
    const expectedState = {
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
        name: 'Grand Park- Dog Run',
        category: 'Dog Run',
        address: {
          line1: '60 W 22nd St (5th and 6th Avenue)',
          line2: 'San Francisco, CA 94105',
          country: 'United States'
        }
      }
    ]};

    const store = configureStore();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
            response: {
              venues: inputState
            }
        } 
      })
    });

    return store.dispatch(getNearByPlaces())
    .then(() => {
      const newState = store.getState();
      expect(newState.place).toMatchObject(expectedState);
    })
  });

  test("store is updated correctly for failed call", () => {
    const store = configureStore();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {
        } 
      })
    });

    return store.dispatch(getNearByPlaces())
    .then(() => {
      const newState = store.getState();
      expect(newState.place).toBe(true);
    })
  });

  test("is category name present", () => {
      const inputState = [{
        id: '123',
        name: 'Town Cutier',
        location: {
          formattedAddress: [
            "1500 Market St",
            "San Francisco, CA 94102",
            "United States"
          ]
        }
      }];

      const expectedState = {
        data:[
        {
          id: '123',
          name: 'Town Cutier',
          category: '',
          address: {
            line1: '1500 Market St',
            line2: 'San Francisco, CA 94102',
            country: 'United States'
          }
        }
      ]};
      
      const store = configureStore();
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
              response: {
                venues: inputState
              }
          } 
        })
      });
  
      return store.dispatch(getNearByPlaces())
      .then(() => {
        const newState = store.getState();
        expect(newState.place).toMatchObject(expectedState);
      })
  });
});