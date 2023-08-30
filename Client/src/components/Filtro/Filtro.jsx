import React, { useEffect } from 'react';
import styles from './Filtro.module.css';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import { FILTRO, BY, STATISTICS, RESULT } from '../../redux/actionCreators';

export default function Filtro() {
  // const [filtro, setFiltro] = useState({
  //   filtro: 'all',
  //   by: [
  //     { origin: 'Tierra', total: 12 },
  //     { origin: 'Marte', total: 5 },
  //     { origin: 'Júpiter', total: 2 },
  //   ],
  //   statistics: [
  //     { origin: 'Tierra', total: 12 },
  //     { origin: 'Marte', total: 5 },
  //     { origin: 'Júpiter', total: 2 },
  //     { specie: 'Gay', total: 12 },
  //     { specie: 'Hetero', total: 5 },
  //     { specie: 'Homo', total: 2 },
  //   ],
  //   result: [],
  // });

  const { filtro, by, statistics, result } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    console.log('Se ha cambiado el valor del select: ', event.target.id);
    if (event.target.id === 'filtro') {
      dispatch({ type: FILTRO, payload: event.target.value });
      dispatch({
        type: BY,
        payload: statistics.filter((stat) =>
          stat.hasOwnProperty(event.target.value)
        ),
      });
    }
    console.log('Se ha cambiado el valor  de by a: ', by);
  };

  useEffect(() => {
    console.log(filtro);
  }, [filtro]);

  return (
    <div className={styles.filtrosContainer}>
      <div className={styles.filtro}>
        <label htmlFor="filtro" className="">
          Filtros:{' '}
        </label>
        <Form.Select id="filtro" onChange={handleChange}>
          <option value="all" selected disabled>
            Seleccionar
          </option>
          <option value="gender">Por género</option>
          <option value="status">Por estado</option>
          <option value="specie">Por especie</option>
          <option value="origin">Por origen</option>
          <option value="all">No filtrar</option>
        </Form.Select>
      </div>
      {filtro !== 'all' && (
        <div className={styles.filtro}>
          <label htmlFor="by" className="">
            igual a:
          </label>
          <Form.Select id="by" onChange={handleChange}>
            <option value="all" selected disabled>
              Seleccionar
            </option>
            {by &&
              by.map((element) => (
                <option value={element[filtro]}>{element[filtro]}</option>
              ))}
          </Form.Select>
        </div>
      )}
    </div>
  );
}
