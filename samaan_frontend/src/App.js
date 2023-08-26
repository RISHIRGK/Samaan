// import logo from './logo.svg';
import './input.css';
import Header from './Components/Header'
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';
import './App.css'
function App() {
  return (
   <div className="App-outer">
      <Header/>
      <div className="Carousel-Outer">
        <Carousel/>
      </div>
      <div className="Categories-Outer">

      </div>
      <Footer/>
   </div>
  );
}

export default App;
