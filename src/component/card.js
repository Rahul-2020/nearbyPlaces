import React from 'react';
import PropTypes from 'prop-types';


const Card = (props) => {

  if (!props.data) {
    return null;
  }
  
  const displayAddress = (address) => {
    return (
      <div className="item"><div className="item-name">{address["line1"]}</div><div className="item-price">{address["line2"]}</div><div className="item-price">{address["country"]}</div></div>
    )
  }

  return (
    <div data-id={props.data.id} className="card">
      <div data-test="card-title" className="title">
        {props.data.name}
      </div>
      <div data-test="card-category" className="category-info">Category: {props.data.category}</div>
      <div data-test="card-address" className="address-info">
        <div className="card-label">Address:</div>
        {displayAddress(props.data.address)}
      </div>
    </div>
  )
}

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    address: PropTypes.shape({
      line1: PropTypes.string,
      line2: PropTypes.string,
      country: PropTypes.string
    })
  })
} 

export default Card;