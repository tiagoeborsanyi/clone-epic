import './App.scss';
import { Route, Switch, Redirect } from 'react-router-dom'

import Header from './components/header'
import Homepage from './pages/homepage'
import GamePage from './pages/gamepage'

function App() {
  return (
    <div className='container'>
      <Header />
      <div className='content'>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/game/:id' component={GamePage} />
          <Redirect to='/' />
        </Switch>
      </div>
      <footer className='footer'>FOOTER</footer>
    </div>
  );
}

export default App;
