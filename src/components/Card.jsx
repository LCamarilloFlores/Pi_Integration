export default function Card({props}) {
   return (
      <div className="card">
         <div>
         <button onClick={props.onClose}>X</button>
         <h2>Nombre: {props.name}</h2>
         <h2>Estatus: {props.status}</h2>
         <h2>Especie: {props.species}</h2>
         <h2>Género: {props.gender}</h2>
         <h2>Origen: {props.origin.name}</h2>
         </div>
         <div>
         <img src={props.image} alt={props.name + " - Imagen"} />
         </div>
      </div>
   );
}
