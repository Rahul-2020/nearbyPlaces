import React from 'react';
import {connect} from 'react-redux';
import useForm from '../../customHooks/form_hook';
import {getNearByPlaces} from '../../store/actions/places_action';

const LocationInput = (props) => {
  const {values, handleChange, handleSubmit} = useForm(getData);

  function getData() {
    props.getNearByPlaces(values.location);
  }
  

  return (
    <form data-test="cityname-form" onSubmit={handleSubmit}>
      <div className="location-input">
        <label> Enter location: </label>
        <div className="input-field">
          <input 
            data-test = "city-input"
            type="text" 
            name="location" 
            placeholder = "city name"
            onChange={handleChange}
            value={values.location || ''}
            required
          />
        </div>
        <div className="location-submit">
          <button data-test="submit-button" type="submit">Submit</button>
        </div>
      </div>
    </form>
  )
}


const mapDispatchToProps =(dispatch) => {
  return ({
    getNearByPlaces: (locationName) => {dispatch(getNearByPlaces(locationName))}
  })
}

export default connect(null, mapDispatchToProps)(LocationInput);
