import React from 'react';
import './search-box.style.css';

type MyProps = {
  className: string;
  placeholder: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

class SearchBox extends React.Component<MyProps> {
  render(): React.ReactNode {
    return (
      <input
        className={`search-box ${this.props.className}`}
        type='search'
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
