import styles from "./SearchBar.module.css"
import Boton from "../Boton/Boton"

export default function SearchBar({onSearch}) {
   const handleSearch = ()=>{
   const inputSearch = document.getElementById(styles.inputSearch)
   inputSearch.value !== "" && onSearch(inputSearch.value)
   inputSearch.value=""
   // $.ajax("GET","https://rickandmortyapi.com/api/character/2")
   }
   const agregaPersonaje = (event)=>{
      if (event.key === 'Enter') {
         handleSearch();
     }
   }
   return (
      <div className={styles.searchBar}>
         <input id={styles.inputSearch} type='search' onKeyUp={agregaPersonaje} />
         <Boton value="Agregar" callback={handleSearch}/>
      </div>
   );
}
