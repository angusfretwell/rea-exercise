import React from 'react';

import PropertyList from './PropertyList';
import fixtures from '../fixtures.json';

export default class App extends React.Component {
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
      </div>
    );
  }
}
