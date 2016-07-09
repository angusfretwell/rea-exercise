jest.unmock('../../components/Properties');
jest.unmock('../../fixtures');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { Properties } from '../../components/Properties';
import PropertyList from '../../components/PropertyList';
import SavedPropertyList from '../../components/SavedPropertyList';
import fixtures from '../../fixtures';

describe('Properties', () => {
  it('displays a loading message', () => {
    const properties = TestUtils.renderIntoDocument(<Properties properties={[]} saved={[]} />);
    const textNode = TestUtils.findRenderedDOMComponentWithTag(properties, 'p');
    expect(textNode.textContent).toEqual('Loading...');
  });

  it('displays an error message', () => {
    const error = new Error('Error');
    const properties = TestUtils.renderIntoDocument(
      <Properties properties={fixtures.results} saved={fixtures.saved} error={error} />
    );
    const textNode = TestUtils.findRenderedDOMComponentWithTag(properties, 'p');
    expect(textNode.textContent).toEqual('Something went wrong...');
  });

  it('displays a list of properties', () => {
    const properties = TestUtils.renderIntoDocument(
      <Properties properties={fixtures.results} saved={fixtures.saved} />
    );
    expect(TestUtils.scryRenderedComponentsWithType(properties, PropertyList).length)
      .toEqual(1);
  });

  it('displays a list of saved properties', () => {
    const properties = TestUtils.renderIntoDocument(
      <Properties properties={fixtures.results} saved={fixtures.saved} />
    );
    expect(TestUtils.scryRenderedComponentsWithType(properties, SavedPropertyList).length)
      .toEqual(1);
  });
});
