import { useState } from "react";
import EnForm from "./EnForm";

function ProjectReview({ resource, projectType, curretnData, changeHandler }) {
  const [currentTab, setCurrentTap] = useState("tab1");

  function handleTab(tab) {
    setCurrentTap(tab);
    console.log(currentTab);
  }
  return (
    <div className="proj_review_sec">
      <ul className="flex formHeader">
        <li
          className={currentTab === "tab1" ? "active" : ""}
          onClick={() => handleTab("tab1")}
        >
          <span className="row_num">1</span>
          <p>التصميم بالأنجليش</p>
        </li>
        <li
          className={currentTab === "tab2" ? "active" : ""}
          onClick={() => handleTab("tab2")}
        >
          <span className="row_num">2</span>
          <p>التصميم بالعربي</p>
        </li>
        <li
          className={currentTab === "tab3" ? "active" : ""}
          onClick={() => handleTab("tab3")}
        >
          <span className="row_num">3</span>
          <p>أضافات آخري</p>
        </li>
      </ul>
      <div>
        {currentTab === "tab1" ? (
          <EnForm
            resource={resource.enResource}
            projectType={projectType}
            curretnData={curretnData}
            changeHandler={changeHandler}
          />
        ) : currentTab === "tab2" ? (
          <EnForm
            resource={resource.arResource}
            projectType={projectType}
            curretnData={curretnData}
            changeHandler={changeHandler}
          />
        ) : (
          <EnForm
            resource={resource.otherResource}
            projectType={projectType}
            curretnData={curretnData}
            changeHandler={changeHandler}
          />
        )}
      </div>
    </div>
  );
}

export default ProjectReview;
