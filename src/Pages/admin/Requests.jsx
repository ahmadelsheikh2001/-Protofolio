import React, { useContext, useEffect } from "react";
import AdminCards from "../../UI/Cards/AdminCards";
import OrederTable from "../../components/admin/tables/OrederTable";
import AppContext from "../../store/app-context";
// import { useSelector } from "react-redux";
// import { Error, Loading } from "../components";
// import { TitleContext } from "../context/Title";

const Requests = () => {
  const currentOrders = [
    {
      id: 1,
      name: "احمد كامل أحمد",
      email: "mostafa.kamel95@example.com",
      budget: "1 - 2 ألف",
      time: "5 - 4 أشهر",
      date: "22 ديسمبر",
      status: "pennding",
    },
    {
      id: 2,
      name: "مصطفي كامل أحمد",
      email: "mostafa.kamel95@example.com",
      budget: "1 - 2 ألف",
      time: "5 - 4 أشهر",
      date: "22 ديسمبر",
      status: "approved",
    },
    {
      id: 3,
      name: "سيد كامل أحمد",
      email: "mostafa.kamel95@example.com",
      budget: "1 - 2 ألف",
      time: "5 - 4 أشهر",
      date: "22 ديسمبر",
      status: "canceled",
    },
    {
      id: 4,
      name: "خالد كامل أحمد",
      email: "mostafa.kamel95@example.com",
      budget: "1 - 2 ألف",
      time: "5 - 4 أشهر",
      date: "22 ديسمبر",
      status: "canceled",
    },
    {
      id: 5,
      name: "خالد كامل أحمد",
      email: "mostafa.kamel95@example.com",
      budget: "1 - 2 ألف",
      time: "5 - 4 أشهر",
      date: "22 ديسمبر",
      status: "canceled",
    },
    {
      id: 6,
      name: "مصطفي كامل أحمد",
      email: "mostafa.kamel95@example.com",
      budget: "1 - 2 ألف",
      time: "5 - 4 أشهر",
      date: "22 ديسمبر",
      status: "canceled",
    },
    {
      id: 7,
      name: "مصطفي كامل أحمد",
      email: "mostafa.kamel95@example.com",
      budget: "1 - 2 ألف",
      time: "5 - 4 أشهر",
      date: "22 ديسمبر",
      status: "canceled",
    },
  ];

  // const { data, error, loading } = useSelector((state) => state.global);

  // if (error) return <Error />;
  // if (loading) return <Loading />;

  let ctx = useContext(AppContext);

  useEffect(() => {
    ctx.title = "طلبات العمل";
  });

  return (
    <AdminCards>
      {/* <OrederTable currentData={data?.ProjectRequests || []} /> */}
      <OrederTable currentData={currentOrders} />
    </AdminCards>
  );
};

export default Requests;
