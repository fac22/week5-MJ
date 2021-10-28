import React from 'react';
const url = 'https://api.github.com/users/';
import followersList from './Data';

export default function GetFollowers(props) {
  const [followers, setFollowers] = React.useState('');

  React.useEffect(() => {
    fetch(url + props.name + '/followers')
      .then((res) => res.json())
      .then((data) => setFollowers(data));
  }, [props.name]);

  React.useEffect(() => {
    if (followers) {
      followers.map((follower) => {
        if (follower.login === props.guess) {
          return followersList.push(props.guess);
        }
      });
    }
  });
  console.log({ followers });
  console.log({ followersList });

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
        {/* {followers
          .filter(
            (follower) => follower.login === followersList.includes(props.guess)
            // )
            // followersList.includes(follower.login))
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
          ))} */}

        {followers
          .filter(
            (follower) =>
              // followersList.include(follower.login)
              follower.login === props.guess ||
              followersList.includes(follower.login)
            // )
            // followersList.includes(follower.login))
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
