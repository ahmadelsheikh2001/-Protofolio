import React from "react";

import "./table.css";

const Table = (props) => {

  return (
    <>
      <table bordered className="table_container">
        <thead>
          <tr>
            {props.tableHead.map((head) => (
              <th key={head}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>{props.children}</tbody>
      </table>
    </>
  );
};

export default Table;
