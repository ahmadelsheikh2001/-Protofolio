import SecLayout from "../../../layout/secLayout/SecLayout";
import AddFeedbackContent from "./AddFeedbackContent";
import AddFeedbackSidebar from "./AddFeedbackSidebar";

import './addFeedback.css';

const AddFeedback = () => {
  return (
    <SecLayout content={<AddFeedbackContent />} sidebar={<AddFeedbackSidebar/>}/>
  );
};


export default AddFeedback;