import "./tableFilter.css";
import { SearchIcon } from "../../../UI/Icons";
import { useState } from "react";
function TableFilter({ onChangeCallback }) {
  const [searchValue, setSearchValue] = useState("");

  function handelChange(e) {
    const inputValue = e.target.value;
    setSearchValue(inputValue);

    onChangeCallback && onChangeCallback(inputValue);
  }
  const icons = {
    caseStudy: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_101_18387)">
          <path
            d="M10 10C9.20435 10 8.44129 10.3161 7.87868 10.8787C7.31607 11.4413 7 12.2044 7 13C7 13.7957 7.31607 14.5587 7.87868 15.1213C8.44129 15.6839 9.20435 16 10 16H14C14.7956 16 15.5587 15.6839 16.1213 15.1213C16.6839 14.5587 17 13.7957 17 13C17 12.2044 16.6839 11.4413 16.1213 10.8787C15.5587 10.3161 14.7956 10 14 10H10ZM15 13C15 13.2652 14.8946 13.5196 14.7071 13.7071C14.5196 13.8947 14.2652 14 14 14H10C9.73478 14 9.48043 13.8947 9.29289 13.7071C9.10536 13.5196 9 13.2652 9 13C9 12.7348 9.10536 12.4804 9.29289 12.2929C9.48043 12.1054 9.73478 12 10 12H14C14.2652 12 14.5196 12.1054 14.7071 12.2929C14.8946 12.4804 15 12.7348 15 13ZM17 19C17 19.2652 16.8946 19.5196 16.7071 19.7071C16.5196 19.8947 16.2652 20 16 20H8C7.73478 20 7.48043 19.8947 7.29289 19.7071C7.10536 19.5196 7 19.2652 7 19C7 18.7348 7.10536 18.4804 7.29289 18.2929C7.48043 18.1054 7.73478 18 8 18H16C16.2652 18 16.5196 18.1054 16.7071 18.2929C16.8946 18.4804 17 18.7348 17 19ZM19.536 3.12102L17.878 1.46502C17.4149 0.999267 16.864 0.629977 16.2572 0.378513C15.6504 0.127049 14.9998 -0.00159798 14.343 1.49812e-05H8C6.67441 0.00160284 5.40356 0.528897 4.46622 1.46624C3.52888 2.40357 3.00159 3.67442 3 5.00002V19C3.00159 20.3256 3.52888 21.5965 4.46622 22.5338C5.40356 23.4711 6.67441 23.9984 8 24H16C17.3256 23.9984 18.5964 23.4711 19.5338 22.5338C20.4711 21.5965 20.9984 20.3256 21 19V6.65702C21.0019 6.0001 20.8735 5.34934 20.6222 4.74238C20.3709 4.13543 20.0017 3.58435 19.536 3.12102ZM18.122 4.53502C18.2627 4.67744 18.3893 4.83317 18.5 5.00002H16V2.50002C16.1671 2.60954 16.3226 2.73587 16.464 2.87702L18.122 4.53502ZM19 19C19 19.7957 18.6839 20.5587 18.1213 21.1213C17.5587 21.6839 16.7956 22 16 22H8C7.20435 22 6.44129 21.6839 5.87868 21.1213C5.31607 20.5587 5 19.7957 5 19V5.00002C5 4.20437 5.31607 3.4413 5.87868 2.8787C6.44129 2.31609 7.20435 2.00002 8 2.00002H14V5.00002C14 5.53045 14.2107 6.03916 14.5858 6.41423C14.9609 6.7893 15.4696 7.00002 16 7.00002H19V19Z"
            fill="#331C48"
          />
        </g>
        <defs>
          <clipPath id="clip0_101_18387">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
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
          placeholder="write any thing"
          className="search"
          onChange={handelChange}
          value={searchValue}
        />
      </div>
      <div>
        <input type="date" />
      </div>
      <div className="cases_input">
        {icons.caseStudy}
        <select>
          <option selected disabled>
            all cases
          </option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
    </div>
  );
}

export default TableFilter;
