
import './App.css';

import Maincontent from './components/maincontent/Maincontent';
import Top from './components/Top/Top';
import Middle from './components/Middle/Middle';

function App() {
  return (
    <div className="App">
      <Maincontent/>
      <Top/>
      <Middle/>
    </div>
  );
}

export default App;
