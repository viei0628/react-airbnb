import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
