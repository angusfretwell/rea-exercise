import fixtures from '../fixtures.json';

export default {
  fetch() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(fixtures);
      }, 250);
    });
  },
};
