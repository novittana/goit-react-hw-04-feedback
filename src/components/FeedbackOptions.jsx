import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={css.options_list}>
      {options.map(option => {
        return (
          <li key={option}>
            <button className={css.button} type="button" onClick={() => onLeaveFeedback(option)}>
              {option.toUpperCase().slice(0, 1) + option.slice(1)}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
