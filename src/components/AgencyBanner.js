import React from 'react';
import styles from '../styles.css';

const propTypes = {
  color: React.PropTypes.string.isRequired,
  logo: React.PropTypes.string.isRequired,
};

class AgencyBanner extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: this.props.color }} className={styles.banner}>
        <img src={this.props.logo} role={'presentation'} className={styles.bannerImage} />
      </div>
    );
  }
}

AgencyBanner.propTypes = propTypes;

export default AgencyBanner;
