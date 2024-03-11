import React, { useEffect } from "react";
import { CancelIcon, SendIcon, TrashDelete } from "../../../UI/Icons";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getorderData } from "../../../redux/slices/order.slice";

const RequestFooter = ({ onCancelRequset }) => {
  const { id } = useParams();

  const data = useSelector((state) => state.order.data);
  const order = data.find((ele) => ele._id == id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getorderData());
  }, []);

  const navigate = useNavigate();
  const trashIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_101_23267)">
        <path
          d="M21 4H17.9C17.6679 2.87141 17.0538 1.85735 16.1613 1.12872C15.2687 0.40009 14.1522 0.00145452 13 0L11 0C9.8478 0.00145452 8.73132 0.40009 7.83875 1.12872C6.94618 1.85735 6.3321 2.87141 6.1 4H3C2.73478 4 2.48043 4.10536 2.29289 4.29289C2.10536 4.48043 2 4.73478 2 5C2 5.26522 2.10536 5.51957 2.29289 5.70711C2.48043 5.89464 2.73478 6 3 6H4V19C4.00159 20.3256 4.52888 21.5964 5.46622 22.5338C6.40356 23.4711 7.67441 23.9984 9 24H15C16.3256 23.9984 17.5964 23.4711 18.5338 22.5338C19.4711 21.5964 19.9984 20.3256 20 19V6H21C21.2652 6 21.5196 5.89464 21.7071 5.70711C21.8946 5.51957 22 5.26522 22 5C22 4.73478 21.8946 4.48043 21.7071 4.29289C21.5196 4.10536 21.2652 4 21 4ZM11 2H13C13.6203 2.00076 14.2251 2.19338 14.7316 2.55144C15.2381 2.90951 15.6214 3.41549 15.829 4H8.171C8.37858 3.41549 8.7619 2.90951 9.26839 2.55144C9.77487 2.19338 10.3797 2.00076 11 2ZM18 19C18 19.7956 17.6839 20.5587 17.1213 21.1213C16.5587 21.6839 15.7956 22 15 22H9C8.20435 22 7.44129 21.6839 6.87868 21.1213C6.31607 20.5587 6 19.7956 6 19V6H18V19Z"
          fill="white"
        />
        <path
          d="M10 17.999C10.2652 17.999 10.5196 17.8937 10.7071 17.7061C10.8946 17.5186 11 17.2642 11 16.999V10.999C11 10.7338 10.8946 10.4795 10.7071 10.2919C10.5196 10.1044 10.2652 9.99902 10 9.99902C9.73478 9.99902 9.48043 10.1044 9.29289 10.2919C9.10536 10.4795 9 10.7338 9 10.999V16.999C9 17.2642 9.10536 17.5186 9.29289 17.7061C9.48043 17.8937 9.73478 17.999 10 17.999Z"
          fill="white"
        />
        <path
          d="M14 17.999C14.2652 17.999 14.5196 17.8937 14.7071 17.7061C14.8947 17.5186 15 17.2642 15 16.999V10.999C15 10.7338 14.8947 10.4795 14.7071 10.2919C14.5196 10.1044 14.2652 9.99902 14 9.99902C13.7348 9.99902 13.4804 10.1044 13.2929 10.2919C13.1054 10.4795 13 10.7338 13 10.999V16.999C13 17.2642 13.1054 17.5186 13.2929 17.7061C13.4804 17.8937 13.7348 17.999 14 17.999Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_101_23267">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <div
      className="review_footer"
      style={{
        display: "flex",
        columnGap: "25px",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px",
        // backgroundColor: "#F3F3F3",
        position: "absolute",
        right: "0",
        width: "100%",
        zIndex: "-1",
      }}
    >
      <span className={order.status}>
        {order.status === "pending"
          ? "في الأنتظار"
          : order.status === "approved"
          ? "تم الرد"
          : "تجاهلتة"}
      </span>
      <button className="button_control">
        <a href={`mailto:${order.email}`}>
          <SendIcon />
          إرسال إيميل
        </a>
      </button>
      {order.status === "canceled" ? (
        <button
          onClick={() => {
            onCancelRequset();
            navigate("requests");
          }}
          className="button_control delete"
        >
          {trashIcon}
          حذف الطلب
        </button>
      ) : (
        <button
          onClick={() => onCancelRequset()}
          className="button_control cancel"
        >
          <CancelIcon />
          رفض الطلب
        </button>
      )}
    </div>
  );
};

export default RequestFooter;
