import { ArrowIcon } from "../../../../UI/Icons";

const NextButton = (props) => {
  return (
    <button onClick={() => props.slider.current.slickNext()}>
      <img src={props.img} />
      {/* <ArrowIcon /> */}
    </button>
  );
};
export default NextButton;
