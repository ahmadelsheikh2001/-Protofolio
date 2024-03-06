import { useFormik } from "formik";
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
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Api, { handleApiError } from "../../../config/api";
import { notifySuccess } from "../../../config/toastify";
import { getUserData } from "../../../redux/slices/user.slice";
import AdminContext from "../../../store/admin-ctx";

function Settings() {
  const [updateType, setUpdateType] = useState("");
  const ctx = useContext(AdminContext)

  const user = useSelector((state) => state.user.data)
  const dispatch = useDispatch()

  const [showModal, setShowModal] = useState(false);
  function handleEdit(e, type) {
    setShowModal(true);
    if (type === "name") setUpdateType("name");
    if (type === "email") setUpdateType("email");
    if (type === "password") setUpdateType("password");
    if (type === "job") setUpdateType("job");
  }

  function handleSubmit(values) {
    Api.patch("/user/" + user._id, values)
      .then(() => {
        dispatch(getUserData())
        notifySuccess("Data Updated !!")
        setShowModal(false)
      })
      .catch((error) => handleApiError(error))
  }
  useEffect(() => {
    formik.setValues(user)
    ctx.setTitle('الاعدادات');  

  }, [user])

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      newPassword: "",
      job: ""
    },
    onSubmit: handleSubmit
  })

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
                      value={formik.values?.name}
                      disabled
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
                      value={formik.values?.email}
                      disabled
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
                      value={formik.values?.job}
                      disabled
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
                      disabled
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
          <form className="admin_modal" onSubmit={formik.handleSubmit}>
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
              <button className='btn_close_modal' type="button" onClick={() => setShowModal(false)}>
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
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        name="name"
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
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        name="email"
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
                        value={formik.values.newPassword}
                        onChange={formik.handleChange}
                        name="newPassword"
                        type="password"
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
                        value={formik.values.job}
                        onChange={formik.handleChange}
                        name="job" type="text"
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
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      name="password" type="password"
                      placeholder="ادخل كلمة السر الحالية"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="btns flex ">
              <button
                className="cancel_btn"
                type="reset"
              >
                الغاء
              </button>

              <button className="save" type="submit">
                <SaveIcon />
                حفظ التغييرات
              </button>
            </div>
          </form>
        </SettingsModal>
      </div>
    </>
  );
}

export default Settings;
