<<<<<<< Updated upstream
import logo from './logo.svg';
import './input.css';
import Header from './Components/Header'
import Carousel from './Components/Carousel';
=======

import './input.css';
import ProductCard from './Components/ProductCard';
>>>>>>> Stashed changes
function App() {
  return (
    <div >
  <p>    dfdbkjdbnd kjd zd </p>
    <div className="  w-[100vw] h-[100vh]   ">
      <div className="w-[100%] h-[100%] max-w-screen-2xl mx-auto flex flex-col justify-center items-center ">
<<<<<<< Updated upstream
        <div className=" w-[100%]  bg-green-400  " >
          <Header/>
        </div>
        <div className=" w-[100%] h-[85%] bg-red-400 flex flex-col   ">
          <div id="carousel" className=" w-[100%] h-[80%] bg-pink-400 ">
            <Carousel/>
=======
        <div className=" w-[100%] h-[15%] bg-green-400  " ></div>
        <div className=" w-[100%] h-[85%] flex flex-col   ">
          <div id="carousel" className=" w-[100%] h-[80%]  flex flex-wrap justify-center items-center ">
          <ProductCard/>  
          <ProductCard/>  
          <ProductCard/>  
          <ProductCard/>  

>>>>>>> Stashed changes
          </div>

        </div>
      </div>
    </div>

    </div>
  );
}

export default App;
