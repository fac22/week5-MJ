import React from 'react';
import infos from './data';
const url = 'https://api.github.com/users/';

const followersList = [];

export default function GetFollowers(props) {
  const [followers, setFollowers] = React.useState('');

  React.useEffect(() => {
    fetch(url + props.name + '/followers')
      .then((res) => res.json())
      .then((data) => setFollowers(data));
  });

  if (!followers) {
    return <div>Loading...</div>;
  } else if (!props.guess) {
    return (
      <div>
        {followers.map((follower) => (
          <img
            src={follower.avatar_url}
            alt=""
            width="128"
            height="128"
            className="follower-img"
            key={follower.id}
            id={follower.id + ''}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div>
        {followers
          .filter(
            (follower) =>
              follower.login != props.guess ||
              followersList.includes(props.guess)
          )
          .map((follower) => (
            <img
              src={follower.avatar_url}
              alt=""
              width="128"
              height="128"
              className="follower-img"
              key={follower.id}
              id={follower.id + ''}
            />
          ))}
      </div>
    );
  }
}
