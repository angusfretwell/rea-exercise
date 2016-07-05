jest.unmock('../../components/HelloWorld');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import HelloWorld from '../../components/HelloWorld';

describe('HelloWorld', () => {
  it('displays the message', () => {
    const helloWorld = TestUtils.renderIntoDocument(<div><HelloWorld /></div>);
    const helloWorldNode = ReactDOM.findDOMNode(helloWorld);

    expect(helloWorldNode.textContent).toEqual('Hello World');
  });
});
