import React from 'react';
import { useState, useEffect } from 'react';

import './App.css';

import { getData } from './utils/data.utils';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

export type Monster = {
  id: string;
  name: string;
  username: string;
  email: string;
};

const App = () => {
  const [searchField, setSearchField] = useState<string>('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState<Monster[]>(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        'https://jsonplaceholder.typicode.com/users'
      );

      setMonsters(users);
    };

    fetchUsers();
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
