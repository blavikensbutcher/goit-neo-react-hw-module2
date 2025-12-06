import css from './Options.module.css';
import { Button } from '@mui/material';

export const Options = ({ updateFeedback, resetFeedback, total }) => {
  return (
    <div className={css.container}>
      <Button onClick={() => updateFeedback('good')} color="success" variant="outlined">
        Good
      </Button>
      <Button onClick={() => updateFeedback('neutral')} color="warning" variant="outlined">
        Neutral
      </Button>
      <Button onClick={() => updateFeedback('bad')} color="error" variant="outlined">
        Bad
      </Button>

      {total > 0 && <Button onClick={resetFeedback}>Reset</Button>}
    </div>
  );
};
