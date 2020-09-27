import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';

type Props = {
  props: EditorProps
}

type EditorProps = {
  language: string;
  displayName: string;
  value: string;
  onChange: () => void;
}

export const Editor: React.FC<Props> = ({ 
  props
}): JSX.Element => {
  const {
    language,
    displayName,
    value,
    onChange
  } = props
  const [open, setOpen] = useState<boolean>(true);

  const handleChange = (editor: any, data: any, value: string): void => {
    onChange(value)
  }

  return (
    <div className='editor-container'>
      <div className='editor-title'>
        { displayName }
        <button
          type='button'
          className='expand-collapse-btn'
          onClick={() => setOpen(prevOpen => !prevOpen)}
        >
          1/2
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'material',
          lineNumbers: true
        }}
      />
    </div>
  )
}