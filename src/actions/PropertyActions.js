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

  saveProperty(property) {
    return property;
  }

  removeProperty(property) {
    return property;
  }
}

export default alt.createActions(PropertyActions);
