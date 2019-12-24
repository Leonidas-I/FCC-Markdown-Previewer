export const Preview = (props) => {
  return (
    <div id='preview' dangerouslySetInnerHTML={{__html: marked(props.inputfield,{renderer:renderer})}} />
  )
};
