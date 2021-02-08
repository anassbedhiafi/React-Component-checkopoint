
import {Carousel} from "react-bootstrap";
import st from "./Navbar/imgs/1.jpg";
import stt from "./Navbar/imgs/2.jpg";
import sttt from "./Navbar/imgs/3.jpg";
import stttt from "./Navbar/imgs/4.jpg";

function App() {
    return (
        <div className="caroussel">
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={st}
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={stt}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={sttt}
      alt="Third slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={stttt}
      alt="First slide"
    />
   
  </Carousel.Item>
</Carousel>
</div>
 );
}

export default App;