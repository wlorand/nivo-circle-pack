// import React from 'react'; // no need in React 17

// child components
import CirclePack from './components/CirclePack';

// styles
import './styles/app.css';

function App() {
  return (
    <div>
      <header className="app-header">
        <h1>Nivo Circle Packing: Website Sitemap</h1>
      </header>
      <CirclePack />
    </div>
  );
}

export default App;
