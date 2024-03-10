import React, { useState, useEffect, useContext } from "react";
// import { useSelector } from "react-redux";
// import { TitleContext } from "../context/Title";
import HomeCards from "../../components/admin/HomeCards";
import Feedbacks from "../../components/admin/Feedbacks";
import Orders from "../../components/admin/Orders";
import { useDispatch, useSelector } from "react-redux";
import { feedBackData } from "../../redux/slices/feedback.slice";
import { getorderData } from "../../redux/slices/order.slice";
import { fetchContent } from "../../redux/slices/content.slice";

const AdminHome = () => {
  // const { data, error, loading } = useSelector((state) => state.global);

  const currentOrders = [
    {
      id: 1,
      Name: "مصطفي كامل أحمد",
      Email: "mostafa.kamel95@example.com",
      Budget: "1 - 2 ألف",
      Timeline: "5 - 4 أشهر",
      date: "22 ديسمبر",
      status: "pennding",
    },
    {
      id: 2,
      Name: "مصطفي كامل أحمد",
      Email: "mostafa.kamel95@example.com",
      Budget: "1 - 2 ألف",
      Timeline: "5 - 4 أشهر",
      date: "22 ديسمبر",
      status: "pennding",
    },
    {
      id: 3,
      Name: "مصطفي كامل أحمد",
      Email: "mostafa.kamel95@example.com",
      Budget: "1 - 2 ألف",
      Timeline: "5 - 4 أشهر",
      date: "22 ديسمبر",
      status: "pennding",
    },
  ];

  const currentFeedbacks = [
    {
      id: 1,
      name: "مصطفي كامل أحمد",
      comment:
        "هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات والاختيار من بينها ، ثم يمكنك شحنها إلى أي مكان تريده هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات والاختيار من بينها ، ثم يمكنك شحنها إلى أي مكان تريده..",
      date: "22 ديسمبر",
      status: "pennding",
    },
    {
      id: 2,
      name: "مصطفي كامل أحمد",
      comment:
        "هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات والاختيار من بينها ، ثم يمكنك شحنها إلى أي مكان تريده هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات والاختيار من بينها ، ثم يمكنك شحنها إلى أي مكان تريده..",
      date: "22 ديسمبر",
      status: "approved",
    },
    {
      id: 3,
      name: "مصطفي كامل أحمد",
      comment:
        "هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات والاختيار من بينها ، ثم يمكنك شحنها إلى أي مكان تريده هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات والاختيار من بينها ، ثم يمكنك شحنها إلى أي مكان تريده..",
      date: "22 ديسمبر",
      status: "canceled",
    },
  ];

  const [numOfLiks, setNumOfLiks] = useState(0);

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(feedBackData())
    dispatch(getorderData())
    dispatch(fetchContent())
  },[])
  const feeback = useSelector((state)=>state.feedback.data)
  const order = useSelector((state)=>state.order.data)
  const content = useSelector((state)=>state.content.data)

  useEffect(() => {
    let likes = content.reduce((prev,cur)=>prev+=cur.likes ,0)
    setNumOfLiks(likes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  // console.log(data);
  // let {title,setTitle} = useContext(TitleContext);
  
  // useEffect(() => {
  //   setTitle('لوحة التحكم')
    
  // });

  // if (error) return <Error />;
  // if (loading) return <Loading />;

  return (
    <div>
      <HomeCards
        liks={numOfLiks}
        orders={order.length}
        feedback={feeback.length}
      />
      {/* <Orders orders={data?.ProjectRequests} />
      <Feedbacks feedbacks={data?.Feedbacks} /> */}
      <Orders orders={currentOrders} />
      <Feedbacks feedbacks={currentFeedbacks} />
    </div>
  );
};

export default AdminHome;
