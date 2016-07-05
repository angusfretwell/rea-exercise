import React from 'react';

const propTypes = {
  color: React.PropTypes.string.isRequired,
  logo: React.PropTypes.string.isRequired,
};

class AgencyBanner extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: this.props.color }}>
        <img src={this.props.logo} role={'presentation'} />
      </div>
    );
  }
}

AgencyBanner.propTypes = propTypes;

export default AgencyBanner;
