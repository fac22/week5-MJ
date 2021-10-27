import React from 'react';
import './App.css';

function App() {
  const [user, setUser] = React.useState('');
  // const [data,getData]= React.uuseState('Alisyad')

  const url = 'https://api.github.com/users/';

  React.useEffect(() => {
    fetch(url + 'jijip41')
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  console.log(user);
  // if(!user) return <div>Loading...</div>

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
          <img></img>
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
