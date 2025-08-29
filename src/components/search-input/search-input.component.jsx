import './search-input.styles.css'

const SearchInput = ({onChangeHandler}) => {

  return (
    <div>
      <input
        type="search"
        onChange={onChangeHandler}
        className="search-input-container"
      />
    </div>
  );
};

export default SearchInput;
