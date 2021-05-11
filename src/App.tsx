import './App.scss';
import { Route, Switch, Redirect } from 'react-router-dom'

import Header from './components/header'
import Login from './pages/login'
import Homepage from './pages/homepage'
import GamePage from './pages/gamepage'
import Biblioteca from './pages/biblioteca'
import Footer from './components/footer'

function App() {
  return (
    <div className='container'>
      <Header />
      <div className='content'>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/game/:id' component={GamePage} />
          <Route path='/biblioteca' component={Biblioteca} />
          <Route path='/login' component={Login} />
          <Redirect to='/' />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
