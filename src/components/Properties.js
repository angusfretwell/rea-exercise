import React from 'react';

import PropertyList from './PropertyList';
import SavedPropertyList from './SavedPropertyList';
import fixtures from '../fixtures.json';

export default class Properties extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: fixtures.results,
      saved: fixtures.saved,
    };
  }

  render() {
    return (
      <div>
        <h1>Properties</h1>
        <PropertyList properties={this.state.results} />
        <SavedPropertyList properties={this.state.saved} />
      </div>
    );
  }
}
