import { ArrowIcon } from "../../../../UI/Icons";

const PrevSlide = props => {
  return(
    <button onClick={() => props.slider.current.slickPrev()}>
    <ArrowIcon />
  </button>
  )
};
export default PrevSlide;