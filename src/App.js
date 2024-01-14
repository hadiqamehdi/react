import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './component/Footer';
import Header from './component/Header';
import Routerss from './component/Router';

function App() {
  return (
    <Router>
      <div style={appStyle}>
        <Header />

        <main style={mainStyle}>
          <Routerss />
        </main>

        <Footer />
      </div>
    </Router>
  );
}

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh', // Ensures that the layout takes at least the full height of the viewport
};

const mainStyle = {
  flex: 1,
};

export default App;
