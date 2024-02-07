import React, { useContext, useEffect, useState } from "react";
import { AcceptIcon, RefuseIcon } from "../../../UI/Icons";
import { useNavigate } from "react-router-dom";
// import { TitleContext } from "../../context/Title";

const SingleFeedback = ({ feedback }) => {
  const [state, setState] = useState("");
  const navigate = useNavigate();
  // let {title,setTitle} = useContext(TitleContext);
  
  useEffect(() => {
    
  });
  useEffect(() => {
    // setTitle(`${feedback.name}`)
    setState(feedback?.Reviewed);
  }, [feedback?.Reviewed]);

  return (
    <tr>
      <td>
        <div
          className="flex"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/allfeedbacks/${feedback?.id}`)}
        >
          <span className="row_num">
            <img
              src={
                feedback?.ImageUrl
                  ? feedback?.ImageUrl
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVuigXD45DkkFU3159RAK53IMriiLLGUjNeFbqzPY&s"
              }
              alt="user_image"
            />
          </span>
          {feedback?.name}
        </div>
      </td>
      <td
        style={{
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          display: "block",
          overflow: "hidden",
          width: "300px",
          lineHeight: "51px",
          textAlign: "center",
        }}
      >
        {feedback?.comment}
      </td>
      <td>{feedback?.date}</td>
      <td>
        {!state ? (
          <div className="btns flex">
            <button onClick={() => setState(true)}>
              <AcceptIcon />
              قبول
            </button>
            <button onClick={() => setState(null)}>
              <RefuseIcon />
              رفض
            </button>
          </div>
        ) : state ? (
          <span className="approved">تم قبولة</span>
        ) : state === null ? (
          <span className="canceled">تم رفضة</span>
        ) : (
          ""
        )}
      </td>
    </tr>
  );
};

export default SingleFeedback;
