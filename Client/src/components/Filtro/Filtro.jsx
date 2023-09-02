import React from 'react';
import styles from './Filtro.module.css';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import { FILTRO, BY } from '../../redux/actionCreators';

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

  const { filter, by } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    console.log('Se ha cambiado el valor del select: ', event.target.id);
    if (event.target.id === 'filtro') {
      dispatch({ type: FILTRO, payload: event.target.value });
      setTimeout(() => {
        if (document.getElementById('by')) {
          const filtro2 = document.getElementById('by').value;
          if (filtro2 !== 'all')
            dispatch({
              type: BY,
              payload: filtro2,
            });
        }
      }, 100);
    } else if (event.target.id === 'by' && event.target.value !== 'all') {
      dispatch({
        type: BY,
        payload: event.target.value,
      });
    }

    // console.log('Se ha cambiado el valor  de by a: ', by);
  };
  const handleMoment = (event) => {
    console.log('A sucedido');
  };

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
          <option value="species">Por especie</option>
          <option value="origin">Por origen</option>
          <option value="all">No filtrar</option>
        </Form.Select>
      </div>
      {filter !== 'all' && (
        <div className={styles.filtro}>
          <label htmlFor="by" className="">
            igual a:
          </label>
          <Form.Select
            id="by"
            onChange={handleChange}
            onLoad={handleMoment}
            className={styles.largo}
          >
            <option value="all" disabled>
              Seleccionar
            </option>
            {by &&
              Object.keys(by[filter]).map((filtro) => (
                <option value={filtro}>
                  {filtro} ({by[filter][filtro]})
                </option>
              ))}
          </Form.Select>
        </div>
      )}
    </div>
  );
}
