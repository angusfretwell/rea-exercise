import React from 'react';

import PropertyList from './PropertyList';
import SavedPropertyList from './SavedPropertyList';
import PropertyStore from '../stores/PropertyStore';
import PropertyActions from '../actions/PropertyActions';

export default class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = PropertyStore.getState();
  }

  componentDidMount() {
    PropertyStore.listen(this.onChange);
    PropertyActions.fetchProperties();
  }

  componentWillUnmount() {
    PropertyStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    if (this.state.errorMessage) {
      return (
        <div>Something went wrong</div>
      );
    }

    if (!this.state.properties.length) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <div>
        <h1>Properties</h1>
        <PropertyList properties={this.state.properties} />
        <SavedPropertyList properties={this.state.saved} />
      </div>
    );
  }
}
