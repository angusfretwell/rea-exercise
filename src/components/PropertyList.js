import React from 'react';
import styles from '../styles.css';
import PropertyCard from './PropertyCard';

const propTypes = {
  properties: React.PropTypes.array,
};

class PropertyList extends React.Component {
  render() {
    const propertyCardNodes = this.props.properties.map((property) => (
      <PropertyCard
        id={Number(property.id)}
        key={property.id}
        price={property.price}
        agency={property.agency}
        image={property.mainImage}
      />
    ));

    return (
      <div className={styles.containerColumn}>
        <h2>Results</h2>
        {propertyCardNodes}
      </div>
    );
  }
}

PropertyList.propTypes = propTypes;

export default PropertyList;
