import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminCards from "../../../UI/Cards/AdminCards";
import EnForm from "./EnForm";
import ProjectReview from "./ProjectReview";
import ProjectFooter from "./ProjectFooter";
import { CheckedIcon } from "../../../UI/Icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchDesignTypes } from "../../../redux/slices/designTypes.slice";
import { resetContent, setContentValues } from "../../../redux/slices/content.slice";

const AddNewProject = ({
  type,
  enResource,
  arResource,
  otherResource,
  currentData,
}) => {
  const [currentStep, SetCurrentStep] = useState(1);
  const title = type === "blogs" ? "المقال" : "التصميم";
  const navigate = useNavigate();

  const Line = (
    <svg
      width="202"
      height="1"
      viewBox="0 0 202 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="202"
        y1="0.5"
        x2="4.37113e-08"
        y2="0.500018"
        stroke="#331C48"
        strokeDasharray="5 5"
      />
    </svg>
  );

  const [data, setData] = useState({});

  useEffect(() => {
    setData(currentData);

    return () => { };
  }, [currentData]);

  const changeValueHandler = (key, value) => {
    setData({
      ...data,
      [key]: value,
    });
  };

  // Check Validate Setp One :=
  const [stepOneVAlidate, setStepOneVAlidate] = useState(false);
  const [stepTwoVAlidate, setStepTwoVAlidate] = useState(false);
  const [stepThreeVAlidate, setStepThreeVAlidate] = useState(false);

  const checkValidation = (arr, fun) => {
    fun(true);
    arr.forEach((a) => {
      if (!a) {
        fun(false);
      }
    });
  };

  useEffect(() => {
    const arr = [];
    const arr2 = [];
    const arr3 = [];
    enResource.forEach((r) => {
      arr.push(data[r.id]);
    });
    // arResource.forEach((r) => {
    //   arr2.push(data[r.id]);
    // });
    otherResource.forEach((r) => {
      arr3.push(data[r.id]);
    });
    checkValidation(arr, setStepOneVAlidate);
    checkValidation(arr2, setStepTwoVAlidate);
    checkValidation(arr3, setStepThreeVAlidate);

    return () => { };
  }, [data]);

  // SubmitForm :=

  const submitFormHandler = (e) => {
    e.preventDefault();
  };

  const values = useSelector((state) => state.content.values)
  console.log(values);

  const { id } = useParams()
  const dispatch = useDispatch()
  const designs = useSelector((state) => state.content.design)
  useEffect(() => {
    dispatch(fetchDesignTypes())
    if (id) {
      var design = designs.find((ele) => ele._id == id)
      dispatch(setContentValues(design))
    } else {
      dispatch(resetContent())
    }
  }, [id])

  return (
    <>
      {currentStep !== 4 && (
        <ul className="flex formHeader">
          <li className={currentStep === 1 ? "currentStep" : ""}>
            <span className={`row_num ${currentStep > 1 ? "completed" : ""}`}>
              {currentStep > 1 ? <CheckedIcon /> : 1}
            </span>
            <p>{title} </p>
          </li>
          {Line}
          {/* <li className={currentStep === 2 ? "currentStep" : ""}>
            <span className={`row_num ${currentStep > 2 ? "completed" : ""}`}>
              {currentStep > 2 ? <CheckedIcon /> : 2}
            </span>
            <p>{title} بالعربي</p>
          </li> */}
          {Line}
          <li className={currentStep === 2 ? "currentStep" : ""}>
            <span className={`row_num ${currentStep > 2 ? "completed" : ""}`}>
              {currentStep > 2 ? <CheckedIcon /> : 2}
            </span>
            <p>أضافات آخري</p>
          </li>
        </ul>
      )}
      <form onSubmit={submitFormHandler}>
        <AdminCards>
          {currentStep === 1 && (
            <EnForm
              resource={enResource}
              projectType={type}
              curretnData={data}
              changeHandler={changeValueHandler}
            />
          )}
          {/* {currentStep === 2 && (
            <EnForm
              resource={arResource}
              projectType={type}
              curretnData={data}
              changeHandler={changeValueHandler}
            />
          )} */}
          {currentStep === 2 && (
            <EnForm
              resource={otherResource}
              projectType={type}
              curretnData={data}
              changeHandler={changeValueHandler}
            />
          )}
          {currentStep === 3 && (
            <ProjectReview
              resource={{ enResource, arResource, otherResource }}
              projectType={type}
              curretnData={data}
              changeHandler={changeValueHandler}
            />
          )}
        </AdminCards>
        {currentStep !== 4 && (
          <div className="form_btn">
            {currentStep !== 1 && (
              <button
                type="button"
                onClick={() => SetCurrentStep((prevSt) => prevSt - 1)}
              >
                السابق
              </button>
            )}
            <div>
              <button
                className="calncel_btn"
                type="button"
                onClick={() => navigate("/admin")}
              >
                الغاء الانشاء
              </button>
              {currentStep === 3 && (
                <button
                  disabled={!stepThreeVAlidate}
                  type="submit"
                  onClick={() => SetCurrentStep(4)}
                >
                  Submit
                </button>
              )}
              {currentStep === 1 && (
                <button
                  disabled={!stepOneVAlidate}
                  type="button"
                  onClick={() => SetCurrentStep(2)}
                >
                  التالى
                </button>
              )}
              {currentStep === 2 && (
                <button
                  disabled={!stepTwoVAlidate}
                  type="button"
                  onClick={() => SetCurrentStep(3)}
                >
                  التالى
                </button>
              )}
            </div>
          </div>
        )}
        {currentStep === 4 && <ProjectFooter />}
      </form>
    </>
  );
};

export default AddNewProject;
