import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Home } from './Pages/Home/Home';
import { Create } from './Pages/Blogs/Create';
import { BlogDetails } from './Pages/Blogs/blogDetails';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom'
 export  const  App = () => {
  return (
    <Router basename="/React-blogs">
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route  path="/create">
              <Create />
            </Route>
            <Route  path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

// export default App;
