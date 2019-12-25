import styles from '../css/preview.css';
import marked from 'marked';
import React from 'react';

marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
};

const Preview = (props) => {
  return (
    <div id='preview' className={styles.previewText} dangerouslySetInnerHTML={{__html: marked(props.inputfield,{renderer: renderer})}} />
  )
};

export default Preview;