import React from 'react';
import Spinner from 'react-bootstrap/esm/Spinner';
import styles from './Preloader.module.css';
import { motion } from 'framer-motion';

function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.modal}
    >
      <Spinner
        style={{ width: '50px', height: '50px', borderWidth: '5px' }}
        animation="border"
        variant="light"
        role="status"
        class="w-5"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </motion.div>
  );
}

export default Preloader;
