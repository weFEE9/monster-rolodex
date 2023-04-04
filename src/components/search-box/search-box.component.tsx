import React from 'react';
import './search-box.style.css';

type MyProps = {
  className: string;
  placeholder: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ className, placeholder, onChangeHandler }: MyProps) => {
  return (
    <input
      type='search'
      className={`search-box ${className}`}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
