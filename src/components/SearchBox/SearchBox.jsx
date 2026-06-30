import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { filtersContact } from "../../redux/filterSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    dispatch(filtersContact(form.value));
  };

  return (
    <div className={css.searchBox}>
      <p className={css.paragraph}>Find contacts by name</p>
      <input
        type="text"
        name="search"
        onChange={handleSearch}
        className={css.input}
      />
    </div>
  );
};

export default SearchBox;
