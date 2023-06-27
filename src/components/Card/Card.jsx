import styles from "./Card.module.css"

function Card({props}) {

   // const darVuelta = (id)=>{
   //    const carta = document.getElementById(id)
   //    carta.className = carta.className === styles.imagen ? styles.imagenReverso : styles.imagen

   // }
   return (
      <div className={styles.card} >
         <button className={styles.cerrarBoton} onClick={props.onClose}>x</button>
         <h2 className={styles.nombre}>{props.name}</h2>
         <div className={styles.datos}>
            <h2>Nombre: <span>{props.name}</span></h2>
            <h2>Estatus: <span>{props.status}</span></h2>
            <h2>Especie: <span>{props.species}</span></h2>
            <h2>Género: <span>{props.gender}</span></h2>
            <h2>Origen: <span>{props.origin.name}</span></h2>
         </div>
            <div className={styles.backImage}></div>
         <img id={props.id} className={styles.imagen} src={props.image} alt={props.name + " - Imagen"} />
      </div>
   );
}
export default Card;