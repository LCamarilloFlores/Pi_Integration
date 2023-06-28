import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import characters from "./data.js";
// import particlesJS from "./particulas.js";

function App() {
  particlesJS.load("particles-js", "./particles.json", function () {
    console.log("callback - particles.js config loaded");
  });
  const mueve = () => {
    const fondo = document.getElementsByClassName("fondo");
    fondo.className = "fondo2";
  };
  return (
    <div className="App">
      <div id="particles-js">
        <div className="fondo " onClick={() => mueve()}></div>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
        <Cards characters={characters} />
        {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
      </div>
    </div>
  );
}

export default App;
