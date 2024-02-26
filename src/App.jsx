import './App.css';
import { Outlet } from 'react-router-dom';

// Import components
import Header from './components/UI/Header';
import Navigation from './components/UI/Navigation';
import Footer from './components/UI/Footer';

// Display components via props on page
function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Outlet />
      <Footer />
    
    </div>
  );
}

export default App
