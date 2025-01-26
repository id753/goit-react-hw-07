import s from "./SearchBox.module.css";

// 6 из слайс.джс имена редьюсеров
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
// 7
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
  // 7
  const dispatch = useDispatch();

  // 8
  // ** Отримуємо поточне значення фільтра з Redux-стану
  // const filters = useSelector((state) => state.filters.name);
  const filters = useSelector(selectNameFilter);
  
  //
  const handleFilterChange = (e) => {
    // Оновлюємо фільтр у Redux-стані
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.search_box}>
      <p>Find contacts by name</p>
      <input value={filters}   
      placeholder="Search contacts" 
      onChange={handleFilterChange} />
    </div>
  );
};

export default SearchBox;
