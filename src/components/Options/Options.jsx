import css from './Options.module.css';
import { Button } from '@mui/material';

export const Options = ({ stats, stats: { good, neutral, bad }, setStats, total }) => {
  function goodReview() {
    setStats({
      ...stats,
      good: good + 1,
    });
  }

  function neutralReview() {
    setStats({
      ...stats,
      neutral: neutral + 1,
    });
  }

  function badReview() {
    setStats({
      ...stats,
      bad: bad + 1,
    });
  }

  function dropReview() {
    setStats({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  return (
    <div className={css.container}>
      <Button onClick={goodReview} color="success" variant="outlined">
        Good
      </Button>
      <Button onClick={neutralReview} color="warning" variant="outlined">
        Neutral
      </Button>
      <Button onClick={badReview} color="error" variant="outlined">
        Bad
      </Button>

      {total > 0 && <Button onClick={dropReview}>Reset</Button>}
    </div>
  );
};
