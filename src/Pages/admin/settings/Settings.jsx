import AdminCards from "../../../UI/Cards/AdminCards";
import {
  CloseIcon,
  CloseMenuBtn,
  EditIcon,
  MessageIcon,
  SaveIcon,
  UserJobIcon,
  UserNameIcon,
} from "../../../UI/Icons";
import Modal from "../../../UI/poppup/Modal";
import Overlay from "../../../UI/poppup/Overlay";
import SettingsModal from "./SettingsModal";
import "./settings.css";
import { useState } from "react";

function Settings() {
  const [updateType, setUpdateType] = useState("");

  const [showModal, setShowModal] = useState(false);
  function handleEdit(e, type) {
    setShowModal(true);
    if (type === "name") setUpdateType("name");
    if (type === "email") setUpdateType("email");
    if (type === "password") setUpdateType("password");
    if (type === "job") setUpdateType("job");
  }
  return (
    <>
      <div className="settings_sec">
        <AdminCards>
          <div className="settings_card">
            <div>
              <img src="../assets/Ellipse 1.png" alt="img" />
            </div>
            <div className="inp_group column">
              <div className="row w-100">
                <div className="input_control basis_50">
                  <div className="label ">
                    <p>الأسم</p>
                  </div>
                  <div className="label_input">
                    <UserNameIcon />
                    <input
                      //   value=""
                      type="text"
                      placeholder="اكتب اسمك"
                    />
                    <span onClick={(e) => handleEdit(e, "name")} id="name">
                      <EditIcon />
                    </span>
                  </div>
                </div>
                <div className="input_control basis_50">
                  <div className="label ">
                    <p>الإيميل</p>
                  </div>
                  <div className="label_input">
                    <MessageIcon />
                    <input
                      //   value=""
                      type="email"
                      placeholder="أدخل بريدك الابكتروني"
                    />
                    <span onClick={(e) => handleEdit(e, "email")}>
                      <EditIcon />
                    </span>
                  </div>
                </div>
              </div>
              <div className="row w-100">
                <div className="input_control basis_50">
                  <div className="label ">
                    <p>المسمى الوظيفي</p>
                  </div>
                  <div className="label_input">
                    <UserJobIcon />
                    <input
                      //   value=""
                      type="text"
                      placeholder="اكتب اسم وظيفتك"
                    />
                    <span onClick={(e) => handleEdit(e, "job")}>
                      <EditIcon />
                    </span>
                  </div>
                </div>
                <div className="input_control basis_50">
                  <div className="label ">
                    <p>كلمة السر</p>
                  </div>
                  <div className="label_input">
                    <CloseIcon />
                    <input
                      //   value=""
                      type="password"
                      placeholder="ادخل كلمة السر"
                    />
                    <span onClick={(e) => handleEdit(e, "password")}>
                      <EditIcon />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AdminCards>
        <Overlay state={showModal} setState={setShowModal} />
        <SettingsModal state={showModal} setState={setShowModal}>
          <div className="admin_modal">
            <div className="head">

            <h3>
              {updateType === "name"
                ? "تغيير الإسم"
                : updateType === "email"
                ? "تغيير الإيميل"
                : updateType === "password"
                ? "تغيير كلمة السر"
                : "تغيير المسمى الوظيفي"}
            </h3>
            <button className='btn_close_modal' onClick={() =>setShowModal(false)}>
            <CloseMenuBtn />
          </button>
                </div>
            <div className="row column w-100">
              <div className="inp_group column">
                {updateType === "name" ? (
                  <div className="input_control w_100">
                    <div className="label ">
                      <p>أسمك الجديد</p>
                    </div>
                    <div className="label_input">
                      <UserJobIcon />
                      <input
                        //   value=""
                        type="text"
                        placeholder="أدخل اسمك الجديد"
                      />
                    </div>
                  </div>
                ) : updateType === "email" ? (
                  <div className="input_control w_100">
                    <div className="label ">
                      <p> تغيير الإيميل</p>
                    </div>
                    <div className="label_input">
                      <UserJobIcon />
                      <input
                        //   value=""
                        type="text"
                        placeholder="أدخل إيميلك الجديد"
                      />
                    </div>
                  </div>
                ) : updateType === "password" ? (
                  <div className="input_control w_100">
                    <div className="label ">
                      <p>تغيير كلمة السر </p>
                    </div>
                    <div className="label_input">
                      <UserJobIcon />
                      <input
                        //   value=""
                        type="text"
                        placeholder="أدخل كلمة السر الجديد"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="input_control w_100">
                    <div className="label ">
                      <p>تغيير المسمى الوظيفي</p>
                    </div>
                    <div className="label_input">
                      <UserJobIcon />
                      <input
                        //   value=""
                        type="text"
                        placeholder="أدخل المسمى الجديد"
                      />
                    </div>
                  </div>
                )}

                <div className="input_control w_100">
                  <div className="label ">
                    <p>كلمة السر الحالية</p>
                  </div>
                  <div className="label_input">
                    <CloseIcon />
                    <input
                      //   value=""
                      type="password"
                      placeholder="ادخل كلمة السر الحالية"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="btns flex ">
              <button
                className="cancel_btn"
                onClick={() => setShowModal(false)}
              >
                الغاء
              </button>
              <button className="save" onClick={() => setShowModal(false)}>
                <SaveIcon />
                حفظ التغييرات
              </button>
            </div>
          </div>
        </SettingsModal>
      </div>
    </>
  );
}

export default Settings;
