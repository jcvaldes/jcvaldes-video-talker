import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import LoginPage from './LoginPage/LoginPage';
import { initSocket } from './utils/wssConnection/wssConnection';

function App() {
  useEffect(() => {
    initSocket();
  }, []);
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
