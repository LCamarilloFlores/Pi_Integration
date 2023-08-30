import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import FavButton from '../FavButton/FavButton';

function Card({ props, onClose }) {
  const girar = (id, event) => {
    if (event.target.id === `boton-${id}`) {
      cerrar(id);
      return;
    } else if (event.target.id === `fav-${id}`) {
      return;
    }
    const carta = document.getElementById(id);
    if (!carta.classList.contains(styles.trasero)) {
      carta.classList.add(styles.trasero);
      // carta.classList.remove(styles.frontal);
    } else {
      // carta.classList.add(styles.frontal);
      carta.classList.remove(styles.trasero);
    }
  };

  const cerrar = (id) => {
    onClose(props.id);
    // const carta = document.getElementById(id);
    // // carta.classList.remove(styles.frontal);
    // carta.classList.add(styles.cerrar);
    // setTimeout(() => {
    // }, 1000);
  };

  return (
    props.name && (
      <div
        key={props.id}
        id={props.id}
        className={styles.card}
        onClick={(event) => girar(props.id, event)}
      >
        <FavButton id={`fav-${props.id}`} character={props} />
        <button
          id={`boton-${props.id}`}
          className={styles.cerrarBoton}
        ></button>
        <Link to={`/detail/${props.id}`}>
          <h2 className={styles.nombre}>{props.name}</h2>
        </Link>
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
        <img
          className={styles.imagen}
          src={props.image}
          alt={props.name + ' - Imagen'}
        />
      </div>
    )
  );
}
export default Card;
