import { useState } from 'react';
import { Header } from './components/index.js';
import { Router } from './services/index.js'
import { Storage } from './services/index.js';

function App() {

  let theme = Storage.getLocalStorage("theme");
  import(`bootswatch/dist/${theme == null ? "lux" : theme}/bootstrap.min.css`);

  const [notes, setNotes] = useState([]);

  return (
    <div>
      <Header setNotes={setNotes}/>
      <Router notes={notes} setNotes={setNotes}/>
    </div>
  );

}

export default App;
