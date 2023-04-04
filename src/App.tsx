import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

type MyState = {
  monsters: Monster[];
  searchField: String;
};

type Monster = {
  id: string;
  name: string;
  username: string;
  email: string;
};

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((resp) => resp.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      const monsterNameInLowerCase = monster.name.toLocaleLowerCase();
      const qInLowerCase = searchField.toLocaleLowerCase();

      const shouldPick: Boolean =
        qInLowerCase === '' || monsterNameInLowerCase.includes(qInLowerCase);

      return shouldPick;
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();

    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Monster Rolodex</h1>

      <SearchBox
        className='monster-search-box'
        placeholder='search monsters'
        onChangeHandler={onSearchChange}
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
