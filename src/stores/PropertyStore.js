import alt from '../alt';

import PropertyActions from '../actions/PropertyActions';

class PropertyStore {
  constructor() {
    this.properties = [];
    this.saved = [];

    this.bindListeners({
      handleSaveProperty: PropertyActions.SAVE_PROPERTY,
      handleRemoveProperty: PropertyActions.REMOVE_PROPERTY,
      handleUpdateProperties: PropertyActions.UPDATE_PROPERTIES,
      handleFetchProperties: PropertyActions.FETCH_PROPERTIES,
      handlePropertiesFailed: PropertyActions.PROPERTIES_FAILED,
    });
  }

  handleUpdateProperties({ results, saved }) {
    this.properties = results;
    this.saved = saved;
  }

  handleSaveProperty(property) {
    this.saved.push(property);
  }

  handleRemoveProperty(property) {
    this.saved.splice(this.saved.indexOf(property), 1);
  }

  handleFetchProperties() {
    this.properties = [];
    this.saved = [];
  }

  handlePropertiesFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

export default alt.createStore(PropertyStore, 'PropertyStore');
