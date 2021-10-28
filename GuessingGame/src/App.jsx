import React from 'react';
<<<<<<< HEAD
import PriceFilter from './PriceFilter.jsx';
import DishList from './DishList.jsx';

function App() {
  const [min, setMin] = React.useState(0);
  const [max, setMax] = React.useState(9);

  return (
    <main>
      <section className="filters">
        <h1>Burger Place</h1>
        <form>
          <PriceFilter min={min} max={max} setMin={setMin} setMax={setMax} />
        </form>
      </section>
      <section className="dishes">
        <h2>Dishes</h2>
        <DishList max={max} min={min} />
      </section>
    </main>
=======
import './App.css';
import GetUser from './GetUser';
import infos from './data';
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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setUser(e.target.username.value);
          }}
        >
          <h1>
            <GetUser name={user} />
          </h1>
          <label>User name</label>
          <input
            type="search"
            aria-label="Search users"
            placeholder="Search users"
            name="username"
          />
        </form>
        <div>
          <Score guess={guessWord} name={user} />
          <Timer />
        </div>
      </header>
      <main>
        <div>
          <GetFollowers name={user} guess={guessWord} />
        </div>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setGuess(e.target.guess.value);
            }}
          >
            <input
              type="search"
              aria-label="Search users"
              placeholder="Guess your follower"
              name="guess"
            />
          </form>
        </div>
      </main>
    </section>
>>>>>>>  refactor the form and components
  );
}

export default App;
