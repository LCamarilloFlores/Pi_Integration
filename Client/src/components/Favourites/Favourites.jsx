import Cards from './../Cards/Cards';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export default function Favourites({ onClose }) {
  const favourites = useSelector((state) => state.myFavourites);

  return (
    <div>
      <Cards characters={favourites} onClose={onClose} />
    </div>
  );
}
