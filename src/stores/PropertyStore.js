import alt from '../alt';
import PropertyActions from '../actions/PropertyActions';
import fixtures from '../fixtures.json';

class PropertyStore {
  constructor() {
    this.properties = fixtures.results;
    this.saved = fixtures.saved;

    this.bindListeners({
      handleSaveProperty: PropertyActions.SAVE_PROPERTY,
      handleRemoveProperty: PropertyActions.REMOVE_PROPERTY,
    });
  }

  handleSaveProperty(property) {
    this.saved.push(property);
  }

  handleRemoveProperty(property) {
    this.saved.splice(this.saved.indexOf(property), 1);
  }
}

export default alt.createStore(PropertyStore, 'PropertyStore');
