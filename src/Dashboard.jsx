import React from 'react';
import followersList from './Data';

function Timer() {
  const [time, setTime] = React.useState(60);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (time >= 1) {
        setTime(time - 1);
      } else if (time === 0) {
        setTime('Time Over');
        clearInterval(timer);
      } else {
        setTime('Time Over');
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [time]);

  return (
    <div className="flex-row">
      <p>Time</p>
      <div className="round">{time}</div>
    </div>
  );
}

function Score(props) {
  const [score, setScore] = React.useState(0);
  const [value, setValue] = React.useState('');

  console.log(followersList);
  React.useEffect(() => {
    setValue(props.guess);
  }, []);

  function checkFollower(val) {
    return followersList.includes(val);
  }

  if (checkFollower(value)) {
    setScore(score + 10);
    return (
      <div className="flex-row">
        <p>Points</p>
        <div className="round">{score}</div>
      </div>
    );
  } else {
    return (
      <div className="flex-row">
        <p>Points</p>
        <div className="round">{score}</div>
      </div>
    );
  }
}

export { Timer, Score };
