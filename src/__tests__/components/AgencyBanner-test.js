jest.unmock('../../components/AgencyBanner');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import AgencyBanner from '../../components/AgencyBanner';

describe('AgencyBanner', () => {
  const image = 'logo.png';
  const color = 'rgb(255, 229, 18)';

  it('displays the agency logo', () => {
    const agencyBanner = TestUtils.renderIntoDocument(
      <AgencyBanner color={color} logo={image} />
    );
    const imgNode = TestUtils.findRenderedDOMComponentWithTag(agencyBanner, 'img');
    expect(imgNode.src).toEqual(image);
  });

  it('displays the agency brand color', () => {
    const agencyBanner = TestUtils.renderIntoDocument(
      <AgencyBanner color={color} logo={image} />
    );
    const agencyBannerNode = ReactDOM.findDOMNode(agencyBanner);
    expect(agencyBannerNode.style.backgroundColor).toEqual(color);
  });
});
