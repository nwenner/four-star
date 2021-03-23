import './App.css';
import Login from './authentication/login';
import SignUp from './authentication/signUp';
import MovieList from './movieList/movieList';
import Movie from './movieList/movie';
import Container  from 'react-bootstrap/Container';
import NavigationBar from './navigationBar/navigationBar';
import PrivateRoute from './authentication/privateRoute'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { ProvideAuth } from './authentication/useAuth';
import AdminMovieList from './admin/adminMovieList';

function App() {
  return (
    <div className="App">
      <ProvideAuth>
        <Router>
          <NavigationBar></NavigationBar>
          <Container>
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
              <Route path='/signup'>
                <SignUp></SignUp>
              </Route>
              <Route path='/main'>
                <MovieList></MovieList>
              </Route>
              <Route path='/movie/:id'
                    children={<Movie></Movie>}></Route>
              <PrivateRoute path='/admin'>
                <AdminMovieList></AdminMovieList>
              </PrivateRoute>
            </Switch>
          </Container>
        </Router>
      </ProvideAuth>
    </div>
  );
}

export default App;
