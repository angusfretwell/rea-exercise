jest.unmock('../../components/PropertyList');
jest.unmock('../../fixtures.json');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import PropertyList from '../../components/PropertyList';
import PropertyCard from '../../components/PropertyCard';
import fixtures from '../../fixtures.json';

describe('PropertyList', () => {
  it('displays a card for each property', () => {
    const propertyList = TestUtils.renderIntoDocument(
      <PropertyList properties={fixtures.results} />
    );
    const propertyCardNodes = TestUtils.scryRenderedComponentsWithType(propertyList, PropertyCard);
    expect(propertyCardNodes.length).toEqual(fixtures.results.length);
  });
});
