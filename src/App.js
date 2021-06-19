import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import Navigation from './components/Navigation/Navigation';
import { UserContext } from './context/TaskListContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="header">
          <Navigation />
        </div>
        <div className="content">
          <UserContext.Provider value="Hello user">
            <Switch>
              <Route exact path="/Login" component={Login} />
              <Route exact path="/" component={Home} />
              <Route exact path="/Dashboard" component={Dashboard} />
            </Switch>
          </UserContext.Provider>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
