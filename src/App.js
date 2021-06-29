import Navbar from './component/Navbar/index';
import Banner from './component/Banner/index';
import About from './component/About/index';
import Team from './component/Team/index';
import Product from './component/Product/index';
import Mitra from './component/Mitra/index';
import Footer from './component/Footer/index';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Mitra />
      <About />
      <Team />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
