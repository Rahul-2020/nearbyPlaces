import React from 'react';
import LocationInput from './location_input';
import ShowPlace from './show_places';

const Location = () => {
    return(
      <div data-test="places-wrapper" className="places-wrapper">
        <LocationInput />
        <ShowPlace />
      </div>
    )
}

export default Location;
