import actionType from '../actions/action_type';
import placeReducer from './places_reducer';

describe("Place Reducer", () => {

  it("should return default state", () => {
    const initialState =  {
      location: '',
      data: []
    }
    const newState = placeReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it("should return new state for type get places", () => {
    const places = [{
      id: 123,
      name: 'test',
      category: 'office',
      address: {
        line1: 'line1',
        line2: 'line2',
        country: 'USA',
      }
    }];
    const newState = placeReducer(undefined, {
      type: actionType.GET_PLACES,
      data: places
    });
    expect(newState).toEqual(places);
  });

  it("should return error for api call fail", () => {

    const newState = placeReducer(undefined, {
      type: actionType.GET_PLACES_ERROR,
      hasErrored: true
    })
    expect(newState).toEqual(true);
  });

});