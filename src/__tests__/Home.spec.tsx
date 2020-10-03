import React from 'react';
import { shallow } from 'enzyme';
import { Home } from '../page/Home';
import { Editor } from '../components/index'
import { unmountComponentAtNode } from "react-dom";

let container: any = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Home Component Test', () => {
  const wrapper = shallow(<Home />);

  test('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('rendering test', () => {
    const wrap = wrapper.find('div');
    
    test('Home Component', () => expect(wrap).toBeTruthy());

    describe('children component test', () => {
      const editor = wrap.find(Editor);
      expect(editor).toBeTruthy();
    });

    describe('iframe test', () => {
      const frame = wrap.find('iframe');
      expect(frame).toBeTruthy();
    });

  })
})