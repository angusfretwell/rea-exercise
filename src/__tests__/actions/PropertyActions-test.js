jest.unmock('../../actions/PropertyActions');
jest.unmock('../../fixtures.json');

import PropertyActions from '../../actions/PropertyActions';
import PropertySource from '../../sources/PropertySource';

describe('PropertyActions', () => {
  describe('#fetchProperties', () => {
    it('calls fetches properties from the property source', () => {
      PropertySource.fetch.mockReturnValueOnce(new Promise((resolve) => resolve()));
      PropertyActions.fetchProperties();
      expect(PropertySource.fetch).toBeCalled();
    });
  });
});
