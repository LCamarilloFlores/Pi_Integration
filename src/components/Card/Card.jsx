import styles from "./Card.module.css"

function Card({props}) {
   
   const girar = (id)=>{
      const carta = document.getElementById(id)
      carta.classList.toggle(styles.giro)
   }

   return (
      <div id={props.id} className={styles.card} onClick={()=>girar(props.id)} >
         
         <button className={styles.cerrarBoton} onClick={props.onClose}>x</button>
         <h2 className={styles.nombre}>{props.name}</h2>
         <div className={styles.datos}>
            <ul>
            <li>{props.name}</li>
            <li>{props.status}</li>
            <li>{props.species}</li>
            <li>{props.gender}</li>
            <li>{props.origin.name}</li>
            </ul>
         </div>
            <div className={styles.backImage}></div>
         <img id={props.id} className={styles.imagen} src={props.image} alt={props.name + " - Imagen"} />
      </div>
   );
}
export default Card;