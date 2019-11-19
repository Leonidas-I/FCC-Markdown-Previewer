import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './fontawesome5';
import './style.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import marked from 'marked';


//Nen lam thu: https://codepen.io/no_stack_dub_sack/pen/JbPZvm?editors=0110

marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
};

class Project extends Component {
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

const Toolbar = (props) => {
  return (
    <div className='toolbar'>
      {props.title}
      <FontAwesomeIcon icon={props.icon} className={props.icon} onClick={props.onClick} size='lg' />
    </div>
  )
};

const Editor = (props) => {
  return (
    <textarea id='editor' type='text' onChange={props.onChange} value={props.inputfield} />
  )
};

const Preview = (props) => {
  return (
    <div id='preview' dangerouslySetInnerHTML={{__html: marked(props.inputfield,{renderer:renderer})}} />
  )
};

/*
const placeholder = 
      `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`
*/
const placeholder = `type something in markdown syntax`

ReactDOM.render(<Project />, document.getElementById('project'));

