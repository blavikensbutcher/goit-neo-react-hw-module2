import css from './Feedback.module.css';

export const Feedback = ({ stats, total }) => {
  let percentage = Math.round(((stats.good + stats.neutral) / total) * 100);
  let percentageColor =
    percentage > 50 ? css.good : percentage < 75 && percentage > 35 ? css.neutral : css.bad;
  // let percentageNeutral = percentage < 80 && percentage > 30;

  return (
    <div className={css.container}>
      <span>Good: {stats.good}</span>
      <span>Neutral: {stats.neutral}</span>
      <span>Bad: {stats.bad} </span>
      <span>Total: {total}</span>
      {total > 0 && <span className={percentageColor}>Positive: {percentage}%</span>}
    </div>
  );
};
