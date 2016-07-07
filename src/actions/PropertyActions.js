import alt from '../alt';

import PropertySource from '../sources/PropertySource';

class PropertyActions {
  fetchProperties() {
    return (dispatch) => {
      dispatch();

      PropertySource.fetch()
        .then((properties) => {
          this.updateProperties(properties);
        })
        .catch((errorMessage) => {
          this.propertiesFailed(errorMessage);
        });
    };
  }

  propertiesFailed(errorMessage) {
    return errorMessage;
  }

  updateProperties(properties) {
    return properties;
  }

  saveProperty(propertyId) {
    return propertyId;
  }

  removeProperty(propertyId) {
    return propertyId;
  }
}

export default alt.createActions(PropertyActions);
