import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './FavButton.module.css';
import { removeFav, addFav } from '../../redux/actions';

export default function FavButton({ id, character, texto }) {
  const favs = useSelector((state) => state.myFavourites);
  const [isFav, setIsFav] = useState(
    favs.find((fav) => fav.id === character.id)
  );
  const dispatch = useDispatch();

  const handleFavourite = () => {
    if (isFav) {
      dispatch(removeFav(character.id));
    } else {
      dispatch(addFav(character));
    }
    setIsFav(!isFav);
  };

  return (
    <div
      id={id}
      className={!isFav ? styles.heart : styles.heartSelected}
      onClick={handleFavourite}
    >
      <span>
        {texto ? (isFav ? 'Quitar de ' : 'Agregar a ') + 'Favoritos' : ''}
      </span>
    </div>
  );
}
