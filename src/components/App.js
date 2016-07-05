import React from 'react';

import PropertyList from './PropertyList';

const propTypes = {
  results: React.PropTypes.array,
  saved: React.PropTypes.array,
};

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Properties</h1>
        <PropertyList properties={this.props.results} />
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
