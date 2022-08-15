import './App.css';
import { useState } from 'react';
import { AddKontak, ListKontak } from './components';

function App() {
  return (
    <div style={{padding: "30px"}}>
      <h2> Applikasi kontak app </h2>
      <hr/>
      <AddKontak/>
      <hr/>
      <ListKontak/>
    </div>
  );
}

export default App;
