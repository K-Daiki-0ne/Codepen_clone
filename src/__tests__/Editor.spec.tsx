import React from 'react'
import { shallow } from 'enzyme';
import { Editor } from '../components/index'
import { unmountComponentAtNode } from "react-dom";
import { Controlled as ControlledEditor } from 'react-codemirror2';


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

describe('Editor Component Test', () => {

  const language: string = 'xml';
  const displayName: string = 'HTML';
  const value: string = '';
  const onChange: Function = (): void => {
    console.log('Hello World');
  }

  const wrapper = shallow(
    <Editor 
      language={language} 
      displayName={displayName}
      value={value}
      onChange={onChange} 
    />
  );

  test('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('Rendering test', () => {
    const wrap = wrapper.find('div');
    test('Editor Component', () => expect(wrap).toBeTruthy());

    describe('ControlledEditor', () => {
      const codefield = wrap.find(ControlledEditor);
      expect(codefield).toBeTruthy();
    })

  })
  
});