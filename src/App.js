import React from 'react';
import './App.css';
import NewsDashboard from './NewsDashboard';

const sampleNewsData = {
  "en": "PUNDIX: Pundi X & Futureverse Partner to Build AI DATA Omnichain Layer and Expand Metaverse Payment…",
  "firstPrice": {
    "PUNDIXUSDT": 0.3662,
    "AIUSDT": 0.362,
    "AIBTC": 0.00000626,
    "DATAUSDT": 0.03492,
    "DATABTC": 0.0000006
  },
  "suggestions": [
    {
      "found": ["PUNDIX", "Pundi X"],
      "coin": "PUNDIX",
      "symbols": [{ "exchange": "binance", "symbol": "PUNDIXUSDT" }]
    }
  ]
};

function App() {
  return (
    <div className="App">
      <h1>Crypto News Dashboard</h1>
      <NewsDashboard newsData={sampleNewsData} />
    </div>
  );
}

export default App;