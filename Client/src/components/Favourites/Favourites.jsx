import Cards from './../Cards/Cards';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { motion } from 'framer-motion';

export default function Favourites({ onClose }) {
  const favourites = useSelector((state) => state.myFavourites);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Cards titulo="Favoritos" characters={favourites} onClose={onClose} />
    </motion.div>
  );
}
