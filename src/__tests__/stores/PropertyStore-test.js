jest.unmock('../../stores/PropertyStore');
jest.unmock('../../fixtures.json');

import alt from '../../alt';
import fixtures from '../../fixtures.json';
import PropertyStore from '../../stores/PropertyStore';
import PropertyActions from '../../actions/PropertyActions';

describe('PropertyStore', () => {
  it('handles the save property action', () => {
    alt.bootstrap(JSON.stringify({
      PropertyStore: {
        properties: fixtures.results,
        saved: fixtures.saved,
      },
    }));

    const action = PropertyActions.SAVE_PROPERTY;
    const data = fixtures.results[0].id;

    alt.dispatcher.dispatch({ action, data });

    const saved = PropertyStore.getState().saved;
    expect(saved[saved.length - 1].id).toBe(data);
  });

  it('listens for the remove property action', () => {
    alt.bootstrap(JSON.stringify({
      PropertyStore: {
        properties: fixtures.results,
        saved: fixtures.saved,
      },
    }));

    const action = PropertyActions.REMOVE_PROPERTY;
    const data = fixtures.saved[0].id;

    alt.dispatcher.dispatch({ action, data });

    const saved = PropertyStore.getState().saved;
    expect(saved.find(x => fixtures.saved[0].id === x.id)).toBeUndefined([]);
  });

  it('listens for the update properties action', () => {
    const action = PropertyActions.UPDATE_PROPERTIES;
    const data = fixtures;

    alt.dispatcher.dispatch({ action, data });

    expect(PropertyStore.getState().properties).toEqual(data.results);
    expect(PropertyStore.getState().saved).toEqual(data.saved);
  });

  it('listens for the fetch properties action', () => {
    alt.bootstrap(JSON.stringify({
      PropertyStore: {
        properties: fixtures.results,
        saved: fixtures.saved,
      },
    }));

    const action = PropertyActions.FETCH_PROPERTIES;

    alt.dispatcher.dispatch({ action });

    expect(PropertyStore.getState().properties).toEqual([]);
    expect(PropertyStore.getState().saved).toEqual([]);
  });

  it('listens for the fetch properties failed action', () => {
    const action = PropertyActions.PROPERTIES_FAILED;
    const data = new Error('Error');

    alt.dispatcher.dispatch({ action, data });

    expect(PropertyStore.getState().error).toEqual(data);
  });
});
