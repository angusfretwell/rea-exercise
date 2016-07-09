import React from 'react';
import styles from '../styles.css';
import PropertyActions from '../actions/PropertyActions';
import AgencyBanner from './AgencyBanner';

const propTypes = {
  id: React.PropTypes.string.isRequired,
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
    let actionButton = (
      <button
        onClick={this.saveProperty}
        className={`${styles.button} ${styles.cardButton}`}
      >Save property</button>
    );

    if (this.props.isSaved) {
      actionButton = (
        <button
          onClick={this.removeProperty}
          className={`${styles.button} ${styles.cardButton}`}
        >Remove property</button>
      );
    }

    return (
      <div
        className={styles.card}
      >
        <AgencyBanner
          color={this.props.agency.brandingColors.primary}
          logo={this.props.agency.logo}
        />
        <img src={this.props.image} role={'presentation'} className={styles.cardImage} />
        <p className={styles.cardText}>{this.props.price}</p>
        {actionButton}
      </div>
    );
  }
}

PropertyCard.propTypes = propTypes;

export default PropertyCard;
