import SearchBar from '../SearchBar/SearchBar.jsx';
import { motion } from 'framer-motion';

function Nav({ onSearch, estado, animar, logout }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4, delay: 0.2 } }}
      exit={{ opacity: 0 }}
    >
      <SearchBar
        onSearch={onSearch}
        estado={estado}
        animar={animar}
        logout={logout}
      />
    </motion.div>
  );
}

export default Nav;
