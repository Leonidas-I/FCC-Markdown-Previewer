import React, { Component } from 'react';
import marked from 'marked';
import { Editor } from './editor';
import { Preview } from './preview';
import { Toolbar } from './toolbar';
import { placeholder } from './placeholder';
import styles from '../css/editor.scss';
import styles from '../css/preview.scss';

marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
};

export class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: placeholder,
      editorMax: false,
      previewMax: false
    };
    this.inputChange = this.inputChange.bind(this);
    this.editorMaxProcess = this.editorMaxProcess.bind(this);
    this.previewMaxProcess = this.previewMaxProcess.bind(this);
  }
  inputChange(text) {
    this.setState({
      input: text.target.value
    });
  }
  editorMaxProcess() {
    this.setState({
      editorMax: !this.state.editorMax
    });
  }
  previewMaxProcess() {
    this.setState({
      previewMax: !this.state.previewMax
    })
  }
  render() {
    const classHTML = this.state.editorMax 
      ? ['editorText maximize', 'previewText minimize', 'compress-arrows-alt'] : this.state.previewMax 
        ? ['editorText minimize', 'previewText maximize', 'compress-arrows-alt']
        : ['editorText', 'previewText', 'expand-arrows-alt'];
    return (
      <div>
        <div className={classHTML[0]}>
          <Toolbar title='Editor' onClick={this.editorMaxProcess} icon={classHTML[2]} />
          <Editor onChange={this.inputChange} inputfield={this.state.input} />
        </div>
        <div className={classHTML[1]}>
          <Toolbar title='Preview' onClick={this.previewMaxProcess} icon={classHTML[2]} />
          <Preview inputfield={this.state.input} />
        </div>
      </div>
    )
  } 
};
