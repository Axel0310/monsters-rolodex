import './card-list.styles.css';
import Card from '../card/card.component';

const CardList = ({ monsters }) => {
  return (
    <div className='card-list-container'>
      {monsters.map((monster) => {
        return (
          <Card
            key={monster.id}
            name={monster.name}
            email={monster.email}
            id={monster.id}
          ></Card>
        );
      })}
    </div>
  );
};

export default CardList;
