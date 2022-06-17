import Contact from "./components/contact/Contact";
import About from "./components/intro/about/About";
import { Intro } from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";

function App() {
  return (
    <div >
     <Intro/>
     <About/>
     <ProductList/>
     <Contact/>
    </div>
  );
}

export default App;
