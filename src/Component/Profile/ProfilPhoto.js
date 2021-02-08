import IMGS from "../Navbar/imgs/ANAS.jpg";

function App() {
    return (
      <div className="profilfont">
          <h3>Here is my Profil Photo:</h3>
          <br />
          <section className="profils">
      <img src={IMGS} alt="Profil"/>
      </section>
      </div>
    );
  }
  export default App;
