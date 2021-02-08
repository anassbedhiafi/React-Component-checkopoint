
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./Component/Navbar/Navbar";
import Figure from "./Component/Navbar/Figure";
import CarOusel from "./Component/Carousel";
import ProfilPhoto from "./Component/Profile/ProfilPhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Figure />
      <CarOusel/>
    <ProfilPhoto />
    <FullName />
    <Address/>
    <Footer/>
    </div>
  );
}

export default App;
