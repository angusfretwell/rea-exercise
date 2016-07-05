import React from 'react';

import PropertyList from './PropertyList';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Properties</h1>
        <PropertyList />
      </div>
    );
  }
}
