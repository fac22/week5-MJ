import React from 'react';

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
    <div>
      <p>Time</p>
      <div>{time}</div>
    </div>
  );
}

const followersImgs = document.querySelectorAll('.follower-img');
console.log(followersImgs);

function Score(props) {
  const [score, setScore] = React.useState(0);
  const [followers, setFollowers] = React.useState('');

  return (
    <div>
      <p>Points</p>
      <div>{score}</div>
    </div>
  );
}

export { Timer, Score };
