import logo from './logo.svg';
import './App.css';
import Hero from './component/Hero'
 import Features from './component/Features'
  import NewItems from './component/NewItems'
 import FeaturesSecond from './component/FeaturesSecond'
  import Products from './component/Products'
 import Testimonial from './component/Testimonial'
import NewLetter from './component/NewLetter'
  import Footer from './component/Footer'
//import Header from './component/Header'
function App() {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white">
        {/* <Header/>   */}
      <Hero/>
        <Features/>
      <NewItems/> 
         <FeaturesSecond/> 
        <Products/>
       <Testimonial/>
       <NewLetter/>
       <Footer/>            

    </div>
  );
}

export default App;
