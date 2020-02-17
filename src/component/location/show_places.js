import React from 'react';
import {connect} from 'react-redux';
import Card from '../card';

class ShowPlace extends React.Component {

  render () {
    const nearByPlaces = this.props.nearByPlaces.data;

    return (
      <div data-test="place-container" className="place-container">
        {nearByPlaces.length > 0 &&
          nearByPlaces.map((item) => {
            return <Card key={item.id} data={item}/>
          })
        }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return ({
    nearByPlaces: state.place
  })
}

export default connect(mapStateToProps)(ShowPlace);