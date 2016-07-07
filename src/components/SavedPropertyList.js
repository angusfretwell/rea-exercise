import React from 'react';

import PropertyCard from './PropertyCard';

const propTypes = {
  properties: React.PropTypes.array,
};

class SavedPropertyList extends React.Component {
  render() {
    const propertyCardNodes = this.props.properties.map((property) => (
      <PropertyCard
        id={Number(property.id)}
        key={property.id}
        price={property.price}
        agency={property.agency}
        image={property.mainImage}
        isSaved
      />
    ));

    return (
      <div>
        <h2>Saved</h2>
        {propertyCardNodes}
      </div>
    );
  }
}

SavedPropertyList.propTypes = propTypes;

export default SavedPropertyList;
