import css from './Feedback.module.css';

export const Feedback = ({ stats, total, positiveFeedbackPercentage }) => {
  let percentageColor =
    positiveFeedbackPercentage > 50 ? css.good : positiveFeedbackPercentage < 75 && positiveFeedbackPercentage > 35 ? css.neutral : css.bad;

  return (
    <div className={css.container}>
      <span>Good: {stats.good}</span>
      <span>Neutral: {stats.neutral}</span>
      <span>Bad: {stats.bad} </span>
      <span>Total: {total}</span>
      {total > 0 && <span className={percentageColor}>Positive: {positiveFeedbackPercentage}%</span>}
    </div>
  );
};
