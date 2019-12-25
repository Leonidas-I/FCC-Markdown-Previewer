import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './fontawesome5';
import styles from '../css/toolbar.css';
import React from 'react';

const Toolbar = (props) => {
  return (
    <div className={styles.toolbar}>
      {props.title}
      <FontAwesomeIcon icon={props.icon} className={styles[props.icon]} onClick={props.onClick} size='lg' />
    </div>
  )
};

export default Toolbar;