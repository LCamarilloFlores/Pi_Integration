import styles from "./SearchBar.module.css"

export default function SearchBar({onSearch}) {
   const handleSearch = ()=>{
const inputSearch = document.getElementById('inputSearch')
onSearch(inputSearch.value)
inputSearch.value=""
   }
   return (
      <div className={styles.searchBar}>
         <input id='inputSearch' type='search' />
         <button onClick={()=>{handleSearch()}}>Agregar</button>
      </div>
   );
}
