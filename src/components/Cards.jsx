import Card from './Card';

export default function Cards(props) {
   return (
   <div className="cards">
      {
         props.characters.map((personaje)=>{
            return( 
            <Card 
            key={personaje.id} 
            props={personaje} />
            )
         })
      }
   </div>
   );
}
