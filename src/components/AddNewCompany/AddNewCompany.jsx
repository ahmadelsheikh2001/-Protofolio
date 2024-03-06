import { useState } from "react";
import {
  AddIcon,
  CloseIcon,
  MessageIcon,
  UserJobIcon,
  UserNameIcon,
} from "../../UI/Icons";
import "./addCompany.css";
function AddNewCompany(props) {
  const [image, setImage] = useState(null);

  const apiUrl = process.env.REACT_APP_API_URL;

  // Resources : =
  const resourceData = [
    {
      text: "العنوان الرئيسي بالأنجليش",
      placeHolder: "قم بإدخال العنوان بالأنجليش",
      id: "title",
      type: "text",
    },
    {
      text: "العنوان الرئيسي بالعربي",
      placeHolder: "قم بإدخال العنوان بالعربي",
      id: "title_ar",
      type: "text",
    },
    {
      text: "أسم الشركة بالأنجليش",
      placeHolder: "قم بإدخال أسم الشركة بالأنجليش",
      id: "company",
      type: "text",
    },
    {
      text: "أسم الشركة بالعربي",
      placeHolder: "قم بإدخال أسم الشركة بالعربي",
      id: "company_ar",
      type: "text",
    },
    {
      text: "لينك الشركة بالأنجليش",
      placeHolder: "قم بإدخال لينك الشركة بالأنجليش",
      id: "company_link",
      type: "text",
    },
    {
      text: "لينك الشركة بالعربي",
      placeHolder: "قم بإدخال لينك الشركة بالعربي",
      id: "company_link_ar",
      type: "text",
    },
  ];
  return (
    <div className="add_company">
      <div className="form flex">
        <div className="w_60">
          <div
            style={{ flexBasis: "100%", alignItems: "flex-start" }}
            className="input_control"
          >
            <div className="flex">
              <span className="row_num">1</span>
              <p>لوجو الشركة</p>
            </div>
            <div>
              <input
                onChange={(e) => {
                  setImage(e.target.files[0]);
                  props.setData({ ...props.data, image: e.target.files[0] });
                }}
                style={{ display: "none" }}
                type="file"
                id="profile_image"
              />
              <label htmlFor="profile_image">
                {!image && !props.data?.image && (
                  <div className="addimage">
                    <AddIcon />
                  </div>
                )}
                {!image && props.data.image && (
                  <img
                    className="addimage"
                    src={apiUrl + props.data.image || ""}
                  />
                )}
                {image && (
                  <img className="addimage" src={URL.createObjectURL(image)} />
                )}
              </label>
            </div>
          </div>
        </div>
        <div className="inp_group column">
          <div className="row w-100">
            <div className="input_control">
              <div className="label flex">
                <span className="row_num">2</span>
                <p>اسم الشركة</p>
              </div>
              <div className="label_input">
                <UserNameIcon />
                <input
                  //   value={formik.values?.name}
                  // disabled
                  type="text"
                  placeholder="قم بإدخال أسم الشركة بالأنجليش"
                />
              </div>
              <div className="label_input">
                <UserNameIcon />
                <input
                  //   value={formik.values?.name}
                  // disabled
                  type="text"
                  placeholder="قم بإدخال أسم الشركة بالعربي"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="inp_group column">
          <div className="row w-100">
            <div className="input_control">
              <div className="label flex">
                <span className="row_num">3</span>
                <p>لينك موقع الشركة</p>
              </div>
              <div className="label_input">
                <UserNameIcon />
                <input
                  //   value={formik.values?.name}
                  // disabled
                  type="text"
                  placeholder="قم بإدخال لينك الفيديو بالانجلش"
                />
              </div>
              <div className="label_input">
                <UserNameIcon />
                <input
                  //   value={formik.values?.name}
                  // disabled
                  type="text"
                  placeholder="قم بإدخال لينك الفيديو بالعربي"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="AddNewComp">+إضافة شركة جديدة</button>
    </div>
  );
}

export default AddNewCompany;
