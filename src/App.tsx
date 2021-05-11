import './App.scss';
import { Route, Switch, Redirect } from 'react-router-dom'

import { useAuth } from './hooks/auth'
import Header from './components/header'
import Login from './pages/login'
import Homepage from './pages/homepage'
import GamePage from './pages/gamepage'
import Biblioteca from './pages/biblioteca'
import Footer from './components/footer'

function App() {
  const { logged } = useAuth()
  let comps
  if (!logged) {
    comps = (
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/game/:id' component={GamePage} />
        <Route path='/login' component={Login} />
        <Redirect to='/' />
      </Switch>
    )
  } else {
    comps = (
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/game/:id' component={GamePage} />
        <Route path='/biblioteca' component={Biblioteca} />
        <Route path='/login' component={Login} />
        <Redirect to='/' />
      </Switch>
    )
  }
  return (
    <div className='container'>
      <Header />
      <div className='content'>
        {comps}
      </div>
      <Footer />
    </div>
  );
}

export default App;
