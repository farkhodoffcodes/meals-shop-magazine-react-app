import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Route} from 'react-router-dom'
import {Switch} from 'react-router-dom'

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LoadFound from "./pages/LoadFound";
import Category from "./pages/Category";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <div>
      <Header/>
      <main className="container content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contact} />
          <Route path="/category/:name" component={Category}/>
          <Route path="/meal/:id" component={Recipe}/>
          <Route component={LoadFound}/>
        </Switch>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
