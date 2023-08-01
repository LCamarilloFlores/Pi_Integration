import styles from './FavButton.module.css';

export default function FavButton({ id, estado }) {
  return (
    <div
      id={id}
      className={!estado ? styles.heart : styles.heartSelected}
    ></div>
  );
}
