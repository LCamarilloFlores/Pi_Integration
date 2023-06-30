import styles from "./SearchBar.module.css"
import Boton from "../Boton/Boton"
import { useState } from "react"

export default function SearchBar({onSearch}) {
   const [id,setId] = useState("")
   const handleChange = (event) => setId(event.target.value)
   const handleSearch = ()=>{
      id !== "" && onSearch(id)
      limpiaCampo(styles.inputSearch)
   }
   const enviar = (event)=>{
      if (event.key === 'Enter') {
         handleSearch();
     }
   }

   const limpiaCampo = (id) =>{
      document.getElementById(id).value = ""
   }
   
   return (
      <div className={styles.searchBar}>
         <input id={styles.inputSearch} type='search' onChange={handleChange}  onKeyUp={enviar}/>
         <Boton value="Agregar" callback={handleSearch}/>
      </div>
   );
}
