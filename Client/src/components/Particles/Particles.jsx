import styles from './Particles.module.css';

export default function Particles({ estado }) {
  return (
    <div id="particles-js" className={!estado ? styles.noVisible : ''}></div>
  );
}
