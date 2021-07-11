import './app.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="react-portfolio-tew">
      <Header />
      <Navigation />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
