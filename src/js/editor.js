import '../css/editor.scss';

export const Editor = (props) => {
  return (
    <textarea id='editor' type='text' onChange={props.onChange} value={props.inputfield} />
  )
};
