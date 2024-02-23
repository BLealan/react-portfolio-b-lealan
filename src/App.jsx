import { useState } from 'react';
import './App.css';
// Import components
import Header from './components/Header';
import Navigation from './components/Navigation';
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
