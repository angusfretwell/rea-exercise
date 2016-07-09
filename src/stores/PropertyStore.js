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

  handleSaveProperty(id) {
    const property = this.properties.find(x => Number(x.id) === id);

    if (!this.saved.find(x => Number(x.id) === id)) {
      this.saved.push(property);
    }
  }

  handleRemoveProperty(id) {
    const property = this.saved.find(x => Number(x.id) === id);
    this.saved.splice(this.saved.indexOf(property), 1);
  }

  handleFetchProperties() {
    this.properties = [];
    this.saved = [];
  }

  handlePropertiesFailed(error) {
    this.error = error;
  }
}

export default alt.createStore(PropertyStore, 'PropertyStore');
