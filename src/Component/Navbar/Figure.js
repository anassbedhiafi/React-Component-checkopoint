import { Figure } from "react-bootstrap";
import IMGS from "../Navbar/imgs/ANAS.png";

function App() {
return (
<div>
<Figure>
<Figure.Image className="anas"
    width={1600}
    height={400}
    alt="171x180"
    src={IMGS}
/>
<Figure.Caption onClick>
    Learn More >
</Figure.Caption>
</Figure>
</div>

);
}

export default App;