import styles from './Boton.module.css';

function Boton({ value, callback, estilo }) {
  return (
    <button
      className={estilo ?? styles.myButton}
      onClick={() => {
        callback();
      }}
    >
      {value}
    </button>
  );
}

export default Boton;
