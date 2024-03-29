import alt from '../alt';
import PropertySource from '../sources/PropertySource';

class PropertyActions {
  constructor() {
    this.generateActions('propertiesFailed', 'updateProperties', 'saveProperty', 'removeProperty');
  }

  fetchProperties() {
    return (dispatch) => {
      dispatch();

      PropertySource.fetch()
        .then((properties) => {
          this.updateProperties(properties);
        })
        .catch((error) => {
          this.propertiesFailed(error);
        });
    };
  }
}

export default alt.createActions(PropertyActions);
