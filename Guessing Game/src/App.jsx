import React from 'react';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <section>
      <header>
        <form>
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
