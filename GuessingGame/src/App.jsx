import React from 'react';
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
  );
}

export default App;
