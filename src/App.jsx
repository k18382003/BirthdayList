import { useState } from 'react';
import data from './data.js';
import List from './List.jsx';

const App = () => {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthday Today</h3>
        <List people={people}/>
      <button type='button' 
      className='btn btn-block'
      onClick={() => {setPeople([])}}
      >Clear all</button>
      </section>
    </main>
  )
};
export default App;
