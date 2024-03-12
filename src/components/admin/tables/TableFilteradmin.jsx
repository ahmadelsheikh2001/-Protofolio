import "./tableFilter.css";
import { SearchIcon } from "../../../UI/Icons";
import { useState } from "react";
import { NavLink } from "react-router-dom";
function TableFilter({ onChangeCallback }) {
  const [searchValue, setSearchValue] = useState("");

  function handelChange(e) {
    const inputValue = e.target.value;
    setSearchValue(inputValue);

    onChangeCallback && onChangeCallback(inputValue);
  }
  const icons = {
    caseStudy: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M19 2H18V1C18 0.734784 17.8946 0.48043 17.7071 0.292893C17.5196 0.105357 17.2652 0 17 0C16.7348 0 16.4804 0.105357 16.2929 0.292893C16.1054 0.48043 16 0.734784 16 1V2H8V1C8 0.734784 7.89464 0.48043 7.70711 0.292893C7.51957 0.105357 7.26522 0 7 0C6.73478 0 6.48043 0.105357 6.29289 0.292893C6.10536 0.48043 6 0.734784 6 1V2H5C3.67441 2.00159 2.40356 2.52888 1.46622 3.46622C0.528882 4.40356 0.00158786 5.67441 0 7L0 19C0.00158786 20.3256 0.528882 21.5964 1.46622 22.5338C2.40356 23.4711 3.67441 23.9984 5 24H19C20.3256 23.9984 21.5964 23.4711 22.5338 22.5338C23.4711 21.5964 23.9984 20.3256 24 19V7C23.9984 5.67441 23.4711 4.40356 22.5338 3.46622C21.5964 2.52888 20.3256 2.00159 19 2ZM2 7C2 6.20435 2.31607 5.44129 2.87868 4.87868C3.44129 4.31607 4.20435 4 5 4H19C19.7956 4 20.5587 4.31607 21.1213 4.87868C21.6839 5.44129 22 6.20435 22 7V8H2V7ZM19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V10H22V19C22 19.7956 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7956 22 19 22Z" fill="#331C48"/>
        </svg>
    ),
  };
  return (
    <div className="table_filter">
      <div className="search_input">
        <label htmlFor="search">
          <SearchIcon />
        </label>
        <input
          id="search"
          placeholder="ابحث عن ما تريدة"
          className="search"
          onChange={handelChange}
          value={searchValue}
        />
      </div>
   
      <div className="cases_input">
        {icons.caseStudy}
        <select>
          <option selected disabled>
            كل التواريخ
          </option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <NavLink className='add_project_btn' to='add'>+إنشاء مشروع جديد
      </NavLink>
    </div>
  );
}

export default TableFilter;