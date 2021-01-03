import './App.css';
import Login from './authentication/login';
import MovieList from './movieList/movieList';
import Movie from './movieList/movie';
import Container  from 'react-bootstrap/Container';
import NavigationBar from './navigationBar/navigationBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Container>
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/main" />
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/logout'>
              <Login></Login>
            </Route>
            <Route path='/main'>
              <MovieList></MovieList>
            </Route>
            <Route path='/movie/:id'
                   children={<Movie></Movie>}></Route>
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
