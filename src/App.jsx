import { useState } from 'react';
import './App.css';
// Import components
import Header from './components/HeaderNav/Header';
import Navigation from './components/HeaderNav/Navigation';
import Footer from './components/Footer';

// Display components via props on page
function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Footer />
    </div>
  );
}

export default App
