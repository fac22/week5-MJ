import React from 'react';
const url = 'https://api.github.com/users/';

export default function GetUser(props) {
  const [userName, setUserName] = React.useState('jijip41');

  React.useEffect(() => {
    fetch(url + props.name)
      .then((res) => res.json())
      .then((data) => setUserName(data));
  });

  if (!userName) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h2 class="user">
          <img src={userName.avatar_url} alt="" width="30" height="30" />
          {userName.login}
        </h2>
      </div>
    );
  }
}
