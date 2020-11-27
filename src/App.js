// import React from 'react'; // no need in React 17

// mock-data
// import chartLibData from './mock-data/chartLibData';
import assetPlatformSegments from './mock-data/assetPlatformSegments';

// child components
import CirclePack from './components/CirclePack';

// styles
import './styles/app.css';

function App() {
  return (
    <div>
      <header className="app-header">
        <h1>Nivo Circle Packing: AIMM Platform Segments</h1>
      </header>
      <CirclePack data={assetPlatformSegments} />
    </div>
  );
}

export default App;
