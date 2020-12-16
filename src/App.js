import React, { useState } from 'react';
import './App.css';
import  List  from './components/List';
import { data } from './data';

function App() {

  const [people, setPeople] = useState(data);
  return (
    <main className='container d-flex justify-content-center mt-5'>
      <section className='bg-light border rounded shadow d-flex flex-column col-md-4 p-3' >
        <h3 className='text-center text-dark'>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])} className='border-0 rounded-pill text-light p-2 ' style={{ backgroundColor: 'deepskyblue', fontWeight: '600' }}>
          Clear all
        </button>
      </section>
    </main>
  );
}

export default App;
