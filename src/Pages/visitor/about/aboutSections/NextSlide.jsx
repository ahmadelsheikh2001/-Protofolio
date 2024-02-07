import { ArrowIcon } from "../../../../UI/Icons";

const NextSlide = props => {
  return(
    <button onClick={() => props.slider.current.slickNext()}>
    <ArrowIcon />
  </button>
  )
};
export default NextSlide;