import { useEffect } from 'react';
import styles from './Particles.module.css';
import ajustaParticles from './Adjust';

export default function Particles({ estado }) {
  useEffect(() => {
    ajustaParticles();
  }, []);
  return (
    <div id="particles-js" className={!estado ? styles.noVisible : ''}></div>
  );
}
