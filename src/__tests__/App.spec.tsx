import React from 'react';
import { shallow } from 'enzyme';
import App from '../root/App';
import { Home } from '../page/Home';

describe('App.tsx ', () => {
  const wrapper = shallow(<App />);

  test('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('rendering test', () => {
    const wrap = wrapper.find('div');
    test('root', () => expect(wrap).toBeTruthy());
    test('children component', () => expect(wrap.find(Home)).toBeTruthy());
  })
})