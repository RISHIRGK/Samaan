// import logo from './logo.svg';
import './input.css';
import Header from './Components/Header'
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';
import './App.css'
import DealOfTheDay from './Components/DealOfTheDay';
import Categories from './Components/Categories';
function App() {
  return (
   <div className="App-outer">
      <Header/>
      <div className="Carousel-Outer">
        <Carousel/>
      </div>
      <div className="DealOfDay-Outer">
        <DealOfTheDay/>
      </div>
      <div className="Categories-Outer">
        <Categories/>
      </div>
      <Footer/>
   </div>
  );
}

export default App;
