import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getorderData } from "../../../redux/slices/order.slice";
import { useDispatch, useSelector } from "react-redux";

const SingleOrder = ({ index, order }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const data = useSelector((state) => state.order.data)
  useEffect(() => {
    dispatch(getorderData())
  }, [])

  return (
    <tr>
      <td
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`${order?._id}`)}
      >
        <span className="row_num">{index + 1}</span>
        {order?.name}
      </td>
      <td>{order?.email}</td>
      <td>{order?.balance}</td>
      <td>{order?.period}</td>
      <td>{order?.date || "22 ديسمبر"}</td>
      <td>
        {order?.status === "pending" && <span className="pennding">في الأنتظار</span>}
        {order?.status === "approved" && (<span className="approved">تم الرد</span>)}
        {order?.status === "rejected" &&( <span className="canceled">تجاهلتة</span>
        )}
      </td>
    </tr>
  );
};

export default SingleOrder;
