import React, { useState, useEffect, useContext } from "react";
import AdminCards from "../../../UI/Cards/AdminCards";
import {
  FileIcons,
  MessageIcon,
  PaperIcon,
  TrashDelete,
  UserNameIcon,
} from "../../../UI/Icons";
import RequestFooter from "./RequestFooter";
import Overlay from "../../../UI/poppup/Overlay";
import Modal from "../../../UI/poppup/Modal";
import AppContext from "../../../store/app-context";
import Api, { handleApiError } from "../../../config/api";
import { useNavigate, useParams } from "react-router-dom";
import { notifySuccess } from "../../../config/toastify";
// import { TitleContext } from "../context/Title";

const Request = ({ data }) => {
  const ctx = useContext(AppContext)
  const {id} =useParams()
  const navigate  = useNavigate()
  const icons = {
    post: (
      <svg
        width="24"
        height="22"
        viewBox="0 0 24 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 0H5C3.67441 0.00158786 2.40356 0.528882 1.46622 1.46622C0.528882 2.40356 0.00158786 3.67441 0 5L0 17C0.00158786 18.3256 0.528882 19.5964 1.46622 20.5338C2.40356 21.4711 3.67441 21.9984 5 22H19C20.3256 21.9984 21.5964 21.4711 22.5338 20.5338C23.4711 19.5964 23.9984 18.3256 24 17V5C23.9984 3.67441 23.4711 2.40356 22.5338 1.46622C21.5964 0.528882 20.3256 0.00158786 19 0ZM5 2H19C19.7956 2 20.5587 2.31607 21.1213 2.87868C21.6839 3.44129 22 4.20435 22 5V6H2V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2ZM19 20H5C4.20435 20 3.44129 19.6839 2.87868 19.1213C2.31607 18.5587 2 17.7956 2 17V8H22V17C22 17.7956 21.6839 18.5587 21.1213 19.1213C20.5587 19.6839 19.7956 20 19 20ZM19 12C19 12.2652 18.8946 12.5196 18.7071 12.7071C18.5196 12.8946 18.2652 13 18 13H6C5.73478 13 5.48043 12.8946 5.29289 12.7071C5.10536 12.5196 5 12.2652 5 12C5 11.7348 5.10536 11.4804 5.29289 11.2929C5.48043 11.1054 5.73478 11 6 11H18C18.2652 11 18.5196 11.1054 18.7071 11.2929C18.8946 11.4804 19 11.7348 19 12ZM15 16C15 16.2652 14.8946 16.5196 14.7071 16.7071C14.5196 16.8946 14.2652 17 14 17H6C5.73478 17 5.48043 16.8946 5.29289 16.7071C5.10536 16.5196 5 16.2652 5 16C5 15.7348 5.10536 15.4804 5.29289 15.2929C5.48043 15.1054 5.73478 15 6 15H14C14.2652 15 14.5196 15.1054 14.7071 15.2929C14.8946 15.4804 15 15.7348 15 16ZM3 4C2.99995 3.76864 3.08012 3.54442 3.22686 3.36555C3.37359 3.18668 3.57781 3.06422 3.80472 3.01904C4.03162 2.97386 4.26717 3.00875 4.47123 3.11778C4.67529 3.2268 4.83523 3.4032 4.92381 3.61693C5.01239 3.83067 5.02411 4.0685 4.95699 4.2899C4.88987 4.51131 4.74805 4.7026 4.55571 4.83116C4.36336 4.95973 4.13239 5.01763 3.90214 4.99499C3.67189 4.97235 3.45662 4.87057 3.293 4.707C3.10545 4.51951 3.00006 4.26519 3 4ZM6 4C5.99995 3.76864 6.08012 3.54442 6.22686 3.36555C6.37359 3.18668 6.57781 3.06422 6.80472 3.01904C7.03162 2.97386 7.26717 3.00875 7.47123 3.11778C7.67529 3.2268 7.83523 3.4032 7.92381 3.61693C8.01239 3.83067 8.02411 4.0685 7.95699 4.2899C7.88987 4.51131 7.74805 4.7026 7.55571 4.83116C7.36336 4.95973 7.13239 5.01763 6.90214 4.99499C6.67189 4.97235 6.45662 4.87057 6.293 4.707C6.10545 4.51951 6.00006 4.26519 6 4ZM9 4C8.99995 3.76864 9.08012 3.54442 9.22686 3.36555C9.37359 3.18668 9.57781 3.06422 9.80472 3.01904C10.0316 2.97386 10.2672 3.00875 10.4712 3.11778C10.6753 3.2268 10.8352 3.4032 10.9238 3.61693C11.0124 3.83067 11.0241 4.0685 10.957 4.2899C10.8899 4.51131 10.7481 4.7026 10.5557 4.83116C10.3634 4.95973 10.1324 5.01763 9.90214 4.99499C9.67189 4.97235 9.45662 4.87057 9.293 4.707C9.10545 4.51951 9.00006 4.26519 9 4Z"
          fill="#331C48"
        />
      </svg>
    ),
    tablet: (
      <svg
        width="20"
        height="24"
        viewBox="0 0 20 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 0H5C3.67441 0.00158786 2.40356 0.528882 1.46622 1.46622C0.528882 2.40356 0.00158786 3.67441 0 5V19C0.00158786 20.3256 0.528882 21.5964 1.46622 22.5338C2.40356 23.4711 3.67441 23.9984 5 24H15C16.3256 23.9984 17.5964 23.4711 18.5338 22.5338C19.4711 21.5964 19.9984 20.3256 20 19V5C19.9984 3.67441 19.4711 2.40356 18.5338 1.46622C17.5964 0.528882 16.3256 0.00158786 15 0V0ZM5 2H15C15.7956 2 16.5587 2.31607 17.1213 2.87868C17.6839 3.44129 18 4.20435 18 5V17H2V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2ZM15 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19H9V20C9 20.2652 9.10536 20.5196 9.29289 20.7071C9.48043 20.8946 9.73478 21 10 21C10.2652 21 10.5196 20.8946 10.7071 20.7071C10.8946 20.5196 11 20.2652 11 20V19H18C18 19.7956 17.6839 20.5587 17.1213 21.1213C16.5587 21.6839 15.7956 22 15 22Z"
          fill="#331C48"
        />
      </svg>
    ),
  };
  const [showModal, setShowModal] = useState(false);
  const refuseProjet = () => {
    Api.delete("/order/"+id)
    .then(()=>{
      notifySuccess("تم رفض الطلب")
      setShowModal(false);
      navigate("/admin/requests")
    })
    .catch((error)=>handleApiError(error))
    // props.onCancelRequset();
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // let {title,setTitle} = useContext(TitleContext);

  // useEffect(() => {
  //   setTitle(`طلب #${props.id} `)

  // });
  return (
    <>
      <AdminCards>
        <div className="data">
          <div className="flex">
            <span className="row_num">1</span>
            <p className="question">ما هو أسمك ؟</p>
          </div>
          <p className="answer">
            <UserNameIcon />
            {data?.name}
          </p>
        </div>
        <div className="data">
          <div className="flex">
            <span className="row_num">2</span>
            <p className="question">ما هو بريدك الألكتروني ؟</p>
          </div>
          <p className="answer">
            <MessageIcon />
            {data?.email}
          </p>
        </div>
      </AdminCards>
      <AdminCards>
        <div className="data">
          <div className="flex">
            <span className="row_num">3</span>
            <p className="question">ماذا تحتاج ويمكنني مساعدتك فية ؟</p>
          </div>
          <div style={{ display: "flex", columnGap: "12px" }}>
            <p className="answer border_card">
              {data?.need?.map((ele) => (
                <span>
                  <PaperIcon />
                  {ele}
                </span>
              ))
              }
            </p>
          </div>
        </div>
        <div className="data">
          <div className="flex">
            <span className="row_num">4</span>
            <p className="question">أخبرني أكثر عن مشروعك</p>
          </div>
          <p className="answer about_p">
            <PaperIcon />
            {data?.about}
          </p>
        </div>
      </AdminCards>
      <AdminCards>
        <div className="data">
          <div className="flex">
            <span className="row_num">5</span>
            <p className="question">
              ما هي ميزانية مشروعك (بالدولار الأمريكي) ؟
            </p>
          </div>
          <p className="answer border_card">{data?.balance}</p>
        </div>
        <div className="data">
          <div className="flex">
            <span className="row_num">6</span>
            <p className="question">ما هو الجدول الزمني لمشروعك ؟</p>
          </div>
          <p className="answer border_card">{data?.period}</p>
        </div>
        <div className="data">
          <div className="flex">
            <span className="row_num">7</span>
            <p className="question"> موجز المشروع !</p>
          </div>
          {/* <p className="answer">
            <FileIcons />
            {props.file}
          </p> */}
        </div>
      </AdminCards>
      <RequestFooter
        onCancelRequset={() => setShowModal(true)}
      // onGetAnswered={props.onGetAnswered}
      // email={props.email}
      // status={props.status}
      />
      <Overlay state={showModal} setState={setShowModal} />
      <Modal state={showModal} setState={setShowModal}>
        {/* <div className='popup'>
        <h6>رفض الطلب</h6>
        <p>هل أنت متأكد من حذف هذا الطلب؟</p>
        <div style={{display: 'flex', columnGap: '12px', justifyContent: 'center'}}>
          <button onClick={refuseProjet} className='button_control cancel'><TrashDelete/>رفض الطلب</button>
          <button onClick={() => setShowModal(false)} className='button_control'>الغاء</button>
        </div>
      </div> */}
        <div className="admin_modal">
          <h3>رفض الطلب</h3>
          <p>هل أنت متأكد من هذا حذف التصميم؟</p>
          <div className="btns flex">
            <button onClick={() => setShowModal(false)}>إلغاء</button>
            <button className="cancel_btn" onClick={refuseProjet}>
              <TrashDelete />
              رفض الطلب
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Request;
