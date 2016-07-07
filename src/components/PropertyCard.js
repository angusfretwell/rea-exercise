import React from 'react';

import PropertyActions from '../actions/PropertyActions';
import AgencyBanner from './AgencyBanner';

const propTypes = {
  id: React.PropTypes.number.isRequired,
  price: React.PropTypes.string.isRequired,
  agency: React.PropTypes.object.isRequired,
  image: React.PropTypes.string.isRequired,
  isSaved: React.PropTypes.bool,
};

class PropertyCard extends React.Component {
  constructor() {
    super();
    this.saveProperty = this.saveProperty.bind(this);
    this.removeProperty = this.removeProperty.bind(this);
  }

  saveProperty() {
    PropertyActions.saveProperty(this.props.id);
  }

  removeProperty() {
    PropertyActions.removeProperty(this.props.id);
  }

  render() {
    return (
      <div onClick={this.props.isSaved ? this.removeProperty : this.saveProperty}>
        <AgencyBanner
          color={this.props.agency.brandingColors.primary}
          logo={this.props.agency.logo}
        />
        <img src={this.props.image} role={'presentation'} />
        <p>{this.props.price}</p>
      </div>
    );
  }
}

PropertyCard.propTypes = propTypes;

export default PropertyCard;
