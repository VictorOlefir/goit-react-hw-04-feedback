import { useState } from 'react';

import Mainbox from 'components/Mainbox';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = type => {
    switch (type) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        new Error('The type not found');
    }
  };

  const total = good + neutral + bad;
  const positivePercentage = Math.floor((good / total) * 100);
  const options = Object.keys({ good, neutral, bad });

  return (
    <>
      <Mainbox
        display="flex"
        flexDirection="column"
        width="1280px"
        height="700px"
        pt={3}
        bg="bodyColor"
        boxShadow="outline"
        as="main"
      >
        <Section title={'Please leave feedback'}>
          <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
        </Section>
        <Section title={'Statistics'}>
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Mainbox>
    </>
  );
};
