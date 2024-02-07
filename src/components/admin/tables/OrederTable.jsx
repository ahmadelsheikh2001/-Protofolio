import React, { useState } from "react";
import Table from "../../../UI/table/Table";
import SingleOrder from "./SingleOrder";
import TableFilter from "./TableFilter";

const OrederTable = ({ currentData }) => {
  const tableHeaders = [
    "الاسم",
    "البريد الألكتروني",
    "الميزانية",
    "الجدول الزمني",
    "التاريخ",
    "الحالة",
  ];

  const [filteredData, setFilteredData] = useState(currentData);
  
  const filterItems = (searchValue) => {
    // filtered ordered based on names
    const filteredOrdered = currentData.filter((order) =>
      order.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredData(filteredOrdered);
  };

  return (
    <>
      <TableFilter onChangeCallback={filterItems} />
      <Table tableHead={tableHeaders}>
        {filteredData.map((order, index) => (
          <SingleOrder key={order?.id} index={+index} order={order} />
        ))}
      </Table>
    </>
  );
};

export default OrederTable;
