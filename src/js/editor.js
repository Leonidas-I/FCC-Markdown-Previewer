import styles from '../css/editor.css';
import React from 'react';

const Editor = (props) => {
  return (
    <textarea id='editor' className={styles.editorText} type='text' onChange={props.onChange} value={props.inputfield} />
  )
};

export default Editor;