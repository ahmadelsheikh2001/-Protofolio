import Video from "./Video";
import { useContext } from "react";
import AppContext from "../../../../../../store/app-context";

const VedioContent = () => {

  const ctx = useContext(AppContext);

  return (
    <>
    <Video />
   {ctx.videoState && 
      <div className={`vedio_overlay ${ctx.videoState ? 'open_overlay' : 'close_overlay'}`}>
      </div>
      }
    </>
  );
};

export default VedioContent;