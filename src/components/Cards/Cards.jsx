import styles from './Cards.module.css'
import Card from '../Card/Card';

 function Cards(props) {
   return (
   <div className={styles.cards}>
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

export default Cards;