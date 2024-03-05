import React, { useState, useEffect } from "react";
import { AddIcon } from "../../../UI/Icons";
import { useDispatch, useSelector } from "react-redux";
import { changeContent, resetContent, setContentValues } from "../../../redux/slices/content.slice";
import { fetchDesignTypes } from "../../../redux/slices/designTypes.slice";
import { useParams } from "react-router-dom";

const SingleInput = (props) => {
  const dispatch = useDispatch()
  const currentTypes = JSON.parse(localStorage.getItem("types"));
  const [types, setTypes] = useState(
    currentTypes
      ? currentTypes
      : {
        uiTypes: ["Mobile App", "تطبيق موبايل"],
        casesTypes: ["cases"],
        blogsTypes: ["blogs"],
        forSaleTypes: ["UI Project"],
      }
  );

  useEffect(() => {
    localStorage.setItem("types", JSON.stringify(types));
  }, [types]);

  useEffect(() => {
    if (
      props.type === "selectBox" &&
      props.projectType === "uiProjects" &&
      !types.uiTypes.includes(props.data[props.id]) &&
      props.data[props.id]
    ) {
      setTypes({
        ...types,
        uiTypes: types.uiTypes.concat(props.data[props.id]),
      });
    }
    if (
      props.type === "selectBox" &&
      props.projectType === "casesProjects" &&
      !types.casesTypes.includes(props.data[props.id]) &&
      props.data[props.id]
    ) {
      setTypes({
        ...types,
        casesTypes: types.casesTypes.concat(props.data[props.id]),
      });
    }
    if (
      props.type === "selectBox" &&
      props.projectType === "blogs" &&
      !types.blogsTypes.includes(props.data[props.id]) &&
      props.data[props.id]
    ) {
      setTypes({
        ...types,
        blogsTypes: types.blogsTypes.concat(props.data[props.id]),
      });
    }
    if (
      props.type === "selectBox" &&
      props.projectType === "forsaleProject" &&
      !types.forSaleTypes.includes(props.data[props.id]) &&
      props.data[props.id]
    ) {
      setTypes({
        ...types,
        forSaleTypes: types.forSaleTypes.concat(props.data[props.id]),
      });
    }
  }, [props.data]);

  const { id } = useParams()
  const values = useSelector((state) => state.content.values)
  const designTypes = useSelector((state) => state.designTypes.data)

  const apiUrl = process.env.REACT_APP_API_URL
  console.log(props?.data[props?.id]);

  return (
    <>
      {props.tag === "input" ? (
        <div className="input_control">
          <div className="flex">
            <span className="row_num">{props.index + 1}</span>
            <p>{props.text}</p>
          </div>
          <div>
            {props.type === "file" && props?.image && (
              <>
                <input
                  onChange={(e) => {
                    props.changeHandler(props.id, URL.createObjectURL(e.target.files[0]))
                    dispatch(changeContent({ name: props?.name, value: e.target.files[0] }))
                  }
                  }
                  style={{ display: "none" }}
                  type={props.type}
                  id={props.id}
                />
                <label htmlFor={props.id}>
                  <div className="addimage">
                    {/* {(!id && !props.data[props?.id]) && <AddIcon />}
                    {(!id && props?.data[props?.id]) && <img src={props?.data[props?.id]} />}
                    {(id) && !props?.data[props?.id] && values[props?.name] && <img src={apiUrl + values[props?.name]} />}
                    {(id) && !props?.data[props?.id] && !values[props?.name] && <AddIcon />}
                    {(id) && props?.data[props?.id] && <img src={props?.data[props?.id]} style={{ height: "100%" }} />} */}
                  </div>
                </label>
              </>
            )}
            {props.type === "file" && !props?.image && (
              <>
                <input
                  onChange={(e) => {
                    dispatch(changeContent({ name: props?.name, value: e.target.files[0] }))
                    props.changeHandler(props.id, e.target.files[0])
                  }
                  }
                  style={{ display: "none" }}
                  type={props.type}
                  id={props.id}
                />
                <label className="label_input" htmlFor={props.id}>
                  {props.icon}
                  <p>
                    {props.data[props.id]
                      ? props.data[props.id]?.name
                      : "قم بإدخال الملف الأبيض"}
                  </p>
                </label>
              </>
            )}
            {props.type !== "file" && (
              <div className="label_input">
                <label htmlFor={props.id}>{props.icon}</label>
                <input
                  value={values[props?.name]}
                  onChange={(e) => {
                    dispatch(changeContent({ name: props?.name, value: e.target.value }))
                    props.changeHandler(props?.id, e.target.value)
                  }
                  }
                  type={props?.type}
                  placeholder={props?.placeHolder}
                  id={props?.id}
                />
              </div>
            )}
          </div>
        </div>
      ) : props.tag === "select" ? (
        <div className="input_control" style={{ position: "relative" }}>
          <div className="flex">
            <span className="row_num">{props.index + 1}</span>
            <p>{props.text}</p>
          </div>
          <div
            style={{ alignItems: "flex-start" }}
            className="label_input add_control"
          >
            {/* <div className="add_new_type">
              <input
                type="text"
                placeholder="اضف نوع جديد"
                onChange={(e) => setNewType(e.target.value)}
              />
              <button onClick={addNewTypeHandler} type="button">
                Add
              </button>
            </div> */}
            <div className="select_box">
              <select
                id={props.id}
                value={values[props?.name]}
                onChange={(e) => {
                  props.changeHandler(props.id, e.target.value)
                  dispatch(changeContent({ name: props?.name, value: e.target.value }))
                }}

                name="type"
              >
                <option value="" defaultValue>...أختار</option>
                {types &&
                  props.projectType === "uiProjects" &&
                  designTypes.map((type) => (
                    <option key={type._id} value={type?.name}>
                      {type?.name}
                    </option>
                  ))}
                {types &&
                  props.projectType === "casesProjects" &&
                  types.casesTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                {types &&
                  props.projectType === "forsaleProject" &&
                  types.forSaleTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                {types &&
                  props.projectType === "blogs" &&
                  types.blogsTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>
      ) : (
        <div className="input_control" style={{ flexBasis: "100%" }}>
          <div className="flex">
            {props.index && <span className="row_num">{props.index + 1}</span>}
            <p>{props.text}</p>
          </div>
          <div className="label_input" style={{ alignItems: "flex-start" }}>
            <label htmlFor={props.id}>{props.icon}</label>
            <textarea
              value={values[props.name]}
              onChange={(e) => {
                props.changeHandler(props.id, e.target.value)
                dispatch(changeContent({ name: props.name, value: e.target.value }))
              }}
              type={props.type}
              placeholder={props.placeHolder}
              id={props.id}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SingleInput;
