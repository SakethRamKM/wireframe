import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Team from './pages/Team/Team';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
       <Route exact path="/" component={Login} />
       <Route path="/dashboard" component={Dashboard} />
       <Route path="/about" component={About} />
       <Route path="/team" component={Team} />
    </div>
  );
}

export default App;
