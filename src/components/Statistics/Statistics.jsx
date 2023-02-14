import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <ul className={css.statistics_list}>
        <li className={css.statistics_list_item}>
          <span>Good: </span>
          {good}
        </li>
        <li className={css.statistics_list_item}>
          <span>Neutral: </span>
          {neutral}
        </li>
        <li className={css.statistics_list_item}>
          <span>Bad: </span>
          {bad}
        </li>
        <li className={css.statistics_list_item}>
          <span>Total: </span> {total}
        </li>
        <li className={css.statistics_list_item}>
          <span>Positive feedback: </span>
          {positivePercentage}
        </li>
      </ul>
    </>
  );
}

Statistics.ropTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
