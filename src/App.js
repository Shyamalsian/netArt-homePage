import './App.css';
import EndBody from './components/EndBody';
import Footer from './components/Footer';
import logo from './components/Images/logo.png'
import MainBody from './components/MainBody';
import MiddleBody from './components/MiddleBody';

function App() {
  return (
    <div className="App">
      <header className="App-header flex flex-col">
          <div className='sm:w-1/5 w-3/5 '>
            <img src={logo} alt="" />
          </div>
          <div className=''>
            <MainBody />
          </div>
          <div>
            <MiddleBody/>
          </div>
          <div className='border border-red-500 w-11/12 mt-2 mb-2 '></div>
          <div>
            <EndBody />
          </div>
          <div>
            <Footer />
          </div>
      </header>
    </div>
  );
}

export default App;
