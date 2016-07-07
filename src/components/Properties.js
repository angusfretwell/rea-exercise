import React from 'react';

import PropertyList from './PropertyList';
import SavedPropertyList from './SavedPropertyList';
import PropertyStore from '../stores/PropertyStore';

export default class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = PropertyStore.getState();
  }

  componentDidMount() {
    PropertyStore.listen(this.onChange);
  }

  componentWillUnmount() {
    PropertyStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <div>
        <h1>Properties</h1>
        <PropertyList properties={this.state.properties} />
        <SavedPropertyList properties={this.state.saved} />
      </div>
    );
  }
}
