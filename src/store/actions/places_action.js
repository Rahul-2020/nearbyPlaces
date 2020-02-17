import axios from 'axios';

import actionType from './action_type';
import { API_ID, API_SECRET, API_DATE } from '../../config/config';
 

export function getNearByPlaces(placeName) {

  return async (dispatch, getState) => {
    try {
      const currentState = getState();

      if(currentState.place.location === placeName) {
        return;
      }
      const url = `https://api.foursquare.com/v2/venues/search?near=${placeName}&client_id=${API_ID}&client_secret=${API_SECRET}&v=${API_DATE}`;
      let getData = await axios.get(url);
      let data = await getData.data;
      
      data = data.response.venues.map((item) => {
        const {0: line1, 1: line2, 2: country} = item.location.formattedAddress;
        const {id, name} = item;

        let  categoryName = '';
        if (item.categories && item.categories[0]) {
           categoryName = item.categories[0].name
        }

        let itemData = {
          id: id,
          name: name,
          category: categoryName,
          address: {
            line1: line1,
            line2: line2,
            country: country,
          }
        }
        return itemData;
      });

      const locationData = {
        location: placeName,
        data: data
      }

      dispatch({
        type: actionType.GET_PLACES,
        data: locationData
      })
    } catch (error) {
      dispatch({
        type: actionType.GET_PLACES_ERROR,
        hasErrored: true
      })
    }
  }
}
