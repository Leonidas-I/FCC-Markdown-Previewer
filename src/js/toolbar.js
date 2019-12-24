import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './fontawesome5';
import styles from '../css/toolbar.scss';

export const Toolbar = (props) => {
  return (
    <div className={styles.toolbar}>
      {props.title}
      <FontAwesomeIcon icon={props.icon} className={props.icon} onClick={props.onClick} size='lg' />
    </div>
  )
};
