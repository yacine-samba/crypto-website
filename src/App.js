import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/Section/About';

function App() {
  return (
    <div className='mx-[7.5rem] my-[3.75rem] h-screen'>
      <Header />
      <Hero />
      <About />
    </div>
  );
}

export default App;
