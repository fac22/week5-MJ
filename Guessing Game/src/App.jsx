import React from 'react';
import './App.css';

{
  /* <img src={user.avatar_url} alt="" width="128" height="128" /> */
}
{
  /* <ReposList url={user.repos_url} /> */
}
function App() {
  const [user, setUser] = React.useState('');
  const [followers, setFollowers] = React.useState('');
  // const [data, getData] = React.uuseState('Alisyad');

  const url = 'https://api.github.com/users/';

  React.useEffect(() => {
    fetch(url + 'jijip41')
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  console.log(user);
  // if(!user) return <div>Loading...</div>

  React.useEffect(() => {
    fetch(url + 'jijip41/followers')
      .then((res) => res.json())
      .then((data) => setFollowers(data));
  }, []);

  // const followers = url + 'jijip41/followers';
  console.log({ followers });
  console.log({ user });

  return (
    <section>
      <header>
        <form>
          <p>{user.name}</p>
          <label>User name</label>
          <input />
        </form>

        <div>
          <p>Points:</p>
          <p>Timer</p>
        </div>
      </header>
      <main>
        <div>
          {followers.map((follower) => (
            <img
              src={follower.avatar_url}
              alt=""
              width="128"
              height="128"
              key={follower.id}
            />
          ))}
        </div>
        <div>
          <form>
            <label>Guess Username</label>
            <input />
          </form>
        </div>
      </main>
    </section>
  );
}

export default App;
