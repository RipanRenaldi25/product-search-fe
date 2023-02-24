import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeSearch from './pages/HomeSearch';

import './index.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeSearch />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
ReactDOM.render(<App />, document.getElementById('app'));
