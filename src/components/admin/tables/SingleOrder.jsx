import React from "react";
import { useNavigate } from "react-router-dom";

const SingleOrder = ({ index, order }) => {
  const navigate = useNavigate();
  console.log(order);
  
  return (
    <tr>
      <td
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`${order?.id}`)}
      >
        <span className="row_num">{index + 1}</span>
        {order?.name}
      </td>
      <td>{order?.email}</td>
      <td>{order?.budget}</td>
      <td>{order?.time}</td>
      <td>{order?.date || "22 ديسمبر"}</td>
      <td>
        {order?.status === "pennding" ? (
          <span className="pennding">في الأنتظار</span>
        ) : order?.status === "approved" ? (
          <span className="approved">تم الرد</span>
        ) : (
          <span className="canceled">تجاهلتة</span>
        )}
      </td>
    </tr>
  );
};

export default SingleOrder;
