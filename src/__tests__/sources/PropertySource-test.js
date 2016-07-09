jest.unmock('../../sources/PropertySource');

import PropertySource from '../../sources/PropertySource';

describe('PropertySource', () => {
  it('fetches properties', () => {
    PropertySource.fetch().then((properties) => {
      expect(Object.keys(properties)).toEqual(['results', 'saved']);
    });
  });
});
