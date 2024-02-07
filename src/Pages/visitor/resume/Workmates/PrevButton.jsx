import { ArrowIcon } from "../../../../UI/Icons"

const PrevButton = props => {
  return (
    <button onClick={() => props.slider.current.slickPrev()}>
      <img src={props.img}/>
      {/* <ArrowIcon /> */}
    </button>
  );
};
export default PrevButton