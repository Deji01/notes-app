import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';
import Headers from './components/Headers';
import NotesListPage from './pages/NotesListPage';
import React from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <Headers />
        <Route path="/" exact component={NotesListPage} />
      </div>
    </Router>
  );
}

export default App;
