import React from 'react';
import './App.css';
import GetUser from './GetUser';
import GetFollowers from './GetFollowers';

import { Timer, Score } from './Dashboard';

function App() {
  const [user, setUser] = React.useState('jijip41');
  const [guessWord, setGuess] = React.useState('');
  // const [id, setId] = React.useState(78619809)

  const followersImgs = document.querySelectorAll('.follower-img');
  console.log(followersImgs);

  React.useEffect(() => {});

  return (
    <section>
      <header>
        <section className="flex-row">
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setUser(e.target.username.value);
              }}
            >
              <h2>
                <GetUser name={user} />
              </h2>
              <label>User name</label>
              <input
                type="search"
                aria-label="Search users"
                placeholder="Search users"
                name="username"
              />
            </form>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setGuess(e.target.guess.value);
              }}
            >
              <label>Guess your follower</label>

              <input
                type="search"
                aria-label="Search users"
                placeholder="Guess your follower"
                name="guess"
              />
            </form>
          </div>
          <div>
            <a href="/" className="refresh">
              Refresh
            </a>
          </div>
        </section>
        <div>
          <Score guess={guessWord} name={user} />
          <Timer />
        </div>
      </header>
      <main>
        <div>
          <GetFollowers name={user} guess={guessWord} />
        </div>
        <div></div>
      </main>
    </section>
  );
}

export default App;
