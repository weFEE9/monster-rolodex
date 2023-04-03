import React from 'react';
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

class App extends React.Component {
  state: MyState = {
    monsters: [],
    searchField: '',
  };

  componentDidMount(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((resp) => resp.json())
      .then((users) => {
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }

  onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render(): React.ReactNode {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      const monsterNameInLowerCase = monster.name.toLocaleLowerCase();
      const qInLowerCase = searchField.toLocaleLowerCase();

      const shouldPick: Boolean =
        qInLowerCase === '' || monsterNameInLowerCase.includes(qInLowerCase);

      return shouldPick;
    });

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
  }
}

export default App;
