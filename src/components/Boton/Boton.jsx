import styles from './Boton.module.css';

function Boton({ value, callback }) {
  return (
    <div>
      <button
        className={styles.myButton}
        onClick={() => {
          callback();
        }}
      >
        {value}
      </button>
    </div>
  );
}

export default Boton;
