import { Outlet } from 'react-router-dom';

// Import components
import Header from './components/UI/Header';
import Navigation from './components/Nav';
import Footer from './components/UI/Footer';

// Display components via props on page
function App() {
  return (
    <div>
      {/* <Header /> */}
      <Navigation />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    
    </div>
  );
}

export default App
