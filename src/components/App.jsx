import './App.css';
import { Description } from './Description/Description.jsx';
import { Options } from './Options/Options.jsx';
import { Feedback } from './Feedback/Feedback.jsx';
import { useEffect, useState } from 'react';
import { Notification } from './Notification/Notification.jsx';

function App() {
  const [stats, setStats] = useState(
    JSON.parse(localStorage.getItem('review')) || {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  );

  useEffect(() => {
    localStorage.setItem('review', JSON.stringify(stats));
  }, [stats]);

  const totalFeedback = stats.good + stats.neutral + stats.bad;
  const positiveFeedbackPercentage = totalFeedback > 0 ? Math.round((stats.good / totalFeedback) * 100) : 0;

  const updateFeedback = (feedbackType) => {
    setStats(prevStats => ({
      ...prevStats,
      [feedbackType]: prevStats[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setStats({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} total={totalFeedback} />

      {totalFeedback > 0 ? (
        <Feedback stats={stats} total={totalFeedback} positiveFeedbackPercentage={positiveFeedbackPercentage} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
