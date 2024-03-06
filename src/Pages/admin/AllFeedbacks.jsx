import React, { useContext, useEffect, useState } from "react";
import AdminCards from "../..//UI/Cards/AdminCards";
import FeedbacksTable from "../../components/admin/tables/FeedbacksTable";
import { useSelector , useDispatch} from "react-redux";
import { feedBackData } from "../../redux/slices/feedback.slice";
import AdminContext from "../../store/admin-ctx";
// import { Error, Loading } from "../components";
// import { TitleContext } from "../context/Title";

const AllFeedbacks = () => {
  // const { data, error, loading } = useSelector((state) => state.global);
  const ctx = useContext(AdminContext)
const dispatch = useDispatch()
useEffect(()=>{
    dispatch(feedBackData())
    ctx.setTitle('أراء الناس');  

},[])
const data = useSelector((state)=>state.feedback.data)



  return (
    <AdminCards>
      <FeedbacksTable currentData={data} />
    </AdminCards>
  );
};

export default AllFeedbacks;
