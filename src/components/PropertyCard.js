import React from 'react';

const propTypes = {
  price: React.PropTypes.string.isRequired,
  agency: React.PropTypes.object.isRequired,
  image: React.PropTypes.string.isRequired,
};

class PropertyCard extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.image} role={'presentation'} />
        <p>{this.props.price}</p>
      </div>
    );
  }
}

PropertyCard.propTypes = propTypes;

export default PropertyCard;
