import PropTypes from 'prop-types';
import css from './Notification.module.css';

export function Notification({ total, message }) {
  return <>{total === 0 && <p className={css.notification}> {message}</p>}</>;
}

Notification.prototype = {
  total: PropTypes.number.isRequired,
  message:PropTypes.string.isRequired
};
