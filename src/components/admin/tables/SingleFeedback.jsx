import React, { useContext, useEffect, useState } from "react";
import { AcceptIcon, RefuseIcon } from "../../../UI/Icons";
import { useNavigate } from "react-router-dom";
import Api, { handleApiError } from "../../../config/api";
import { notifySuccess } from "../../../config/toastify";
import { feedBackData } from "../../../redux/slices/feedback.slice";
import { useDispatch } from "react-redux";
// import { TitleContext } from "../../context/Title";

const SingleFeedback = ({ feedback }) => {
  const [state, setState] = useState("");
  const navigate = useNavigate();
  // let {title,setTitle} = useContext(TitleContext);
  const dispatch = useDispatch()


  useEffect(() => {
    setState(feedback?.Reviewed);
    console.log(feedback);
    
  }, [feedback?.Reviewed]);

  function updateFeedback(id, status) {
    Api.patch("/feedback/" + id, { status })
      .then(() => {
        notifySuccess("FeedBack is " + status)
        dispatch(feedBackData())
      })
      .catch((error) => handleApiError(error))
  }

  const apiUrl = process.env.REACT_APP_API_URL
  return (
    <tr>
      <td>
        <div
          className="flex"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/admin/allfeedbacks/${feedback?._id}`)}
        >
          <span className="row_num">
            <img
              src={
                 feedback?.image
                  ? apiUrl + feedback?.image
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
        {feedback?.message}
      </td>
      <td>{feedback?.date}</td>
      <td>
        {feedback?.status == "pending" && (
          <div className="btns flex">
            <button onClick={() => updateFeedback(feedback?._id, "approved")}>
              <AcceptIcon />
              قبول
            </button>
            <button onClick={() => updateFeedback(feedback?._id, "rejected")}>
              <RefuseIcon />
              رفض
            </button>
          </div>
        )}
        {
          feedback?.status == "approved" && (
            <span className="approved">تم قبولة</span>
          )}
        {feedback?.status == "rejected" && (
          <span className="canceled">تم رفضة</span>
        )}
      </td>
    </tr>
  );
};

export default SingleFeedback;
