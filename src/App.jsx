import { useState, useEffect } from "react";
import "./App.css";
import CardList from './components/card-list/card-list.component';
import SearchInput from './components/search-input/search-input.component';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  useEffect(() => {
    const fetchMonsters = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setMonsters(data);
      setFilteredMonsters(data);
    }

    fetchMonsters();
 
  }, []);

  const handleSearchInputChange = (event) => {
    const filteredMonstersList = monsters.filter(({ name }) =>
      name.toLowerCase().includes(event.target.value)
    );
    setFilteredMonsters(filteredMonstersList);
  }

  return (
    <div className="app-container">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchInput monsters={monsters} onChangeHandler={handleSearchInputChange}/>
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}

export default App;
