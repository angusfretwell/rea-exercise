import React from 'react';
import styles from '../styles.css';
import connectToStores from 'alt-utils/lib/connectToStores';
import PropertyList from './PropertyList';
import SavedPropertyList from './SavedPropertyList';
import PropertyStore from '../stores/PropertyStore';
import PropertyActions from '../actions/PropertyActions';

const propTypes = {
  error: React.PropTypes.object,
  properties: React.PropTypes.array.isRequired,
  saved: React.PropTypes.array.isRequired,
};

export class Properties extends React.Component {
  static getStores() {
    return [PropertyStore];
  }

  static getPropsFromStores() {
    return PropertyStore.getState();
  }

  componentDidMount() {
    PropertyActions.fetchProperties();
  }

  render() {
    if (this.props.error) {
      return (
        <div>Something went wrong</div>
      );
    }

    if (!this.props.properties.length) {
      return (
        <p>Loading...</p>
      );
    }

    return (
      <div className={styles.container}>
        <PropertyList properties={this.props.properties} />
        <SavedPropertyList properties={this.props.saved} />
      </div>
    );
  }
}

Properties.propTypes = propTypes;

export default connectToStores(Properties);
