import React from 'react';
import { Footer, Blog, Possibilities, Features, Whatgpt3, Header} from './containers';
import { CTA, Brand, Navbar} from './components';

import './App.css'
const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
        </div>
        <Header/>
        <Brand/>
        <Features/>
    </div>
  )
}

export default App