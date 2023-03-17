import React from 'react';
import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (option) => {
    switch (option) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        return;
    }
  }

  const countTotalFeedback = () => {
    return good + bad + neutral;
  }

  const countPositiveFeedbackPercentage = () => {
    let total = countTotalFeedback();
    return Math.round(good / total * 100);
  }

  return <div>
      <Section title='Please leave feedback'>
        <FeedbackOptions
          onLeaveFeedback={handleFeedback}
          options={["good", "neutral", "bad"]}
        />
      </Section>
      <Section title='Statistics'>
        {countTotalFeedback() ? <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        /> : <Notification message='No feedback given'/>}
      </Section>
    </div>;
}