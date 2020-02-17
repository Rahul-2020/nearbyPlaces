import actionType from '../actions/action_type';

const initialState = {
    location: '',
    data: []
}

function placeReducer(state=initialState, action) {
  switch(action.type) {
    case actionType.GET_PLACES:

      return action.data;
    case actionType.GET_PLACES_ERROR:
          return action.hasErrored;
    default:
      return state;
  }
}

export default placeReducer;