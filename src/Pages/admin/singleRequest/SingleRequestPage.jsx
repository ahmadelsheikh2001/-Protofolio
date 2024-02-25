import React, { useEffect, useState } from "react";
import Request from "./Request";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getorderData } from "../../../redux/slices/order.slice";

const SingleRequestPage = () => {
  const [currentRequest, setCurrentRequset] = useState(null);
  const {id} =useParams()

  const data = useSelector((state) => state.order.data)
  const order  = data.find((ele)=>ele._id == id)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getorderData())
  }, [])


  // if (!currentRequest) {
  //   return <h3>Loading....!</h3>;
  // }

  const answerEmail = () => {
    setCurrentRequset({ ...currentRequest, status: "approved" });
  };
  const cancelRequset = () => {
    setCurrentRequset({ ...currentRequest, status: "canceled" });
  };

  
  return (
    <Request
      data = {order}
    />
  );
};

export default SingleRequestPage;
