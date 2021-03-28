import './App.scss';
import { Route } from 'react-router-dom'

import Header from './components/header'
import Homepage from './pages/homepage'

function App() {
  return (
    <div className='container'>
      <Header />
      <div className='content'>
      <Route exact path='/' component={Homepage} />
      </div>
      <footer className='footer'>FOOTER</footer>
    </div>
  );
}

export default App;
