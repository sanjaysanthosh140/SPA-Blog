import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Navbars from './Navbars';
import Home from './Home';
import Creat from './Creat';
import Blogdetals from './Blogdetals';
import Notfund from './Notfund';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbars />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/create" component={Creat} />
            <Route path="/blogs/:id" component={Blogdetals} />
            <Route path="*" component={Notfund} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );

}

export default App;
