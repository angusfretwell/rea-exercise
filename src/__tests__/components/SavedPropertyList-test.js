jest.unmock('../../components/SavedPropertyList');
jest.unmock('../../fixtures.json');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import SavedPropertyList from '../../components/SavedPropertyList';
import PropertyCard from '../../components/PropertyCard';
import fixtures from '../../fixtures.json';

describe('SavedPropertyList', () => {
  it('displays a card for each property', () => {
    const savedPropertyList = TestUtils.renderIntoDocument(
      <SavedPropertyList properties={fixtures.saved} />
    );
    const propertyCardNodes = TestUtils.scryRenderedComponentsWithType(
      savedPropertyList,
      PropertyCard
    );
    expect(propertyCardNodes.length).toEqual(fixtures.saved.length);
  });
});
