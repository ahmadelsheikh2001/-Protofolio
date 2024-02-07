import AppContext from "../../../../../../store/app-context";
import { CSSTransition } from "react-transition-group";
import ReactPlayer from "react-player";
import { useContext } from "react";
import { CloseMenuBtn } from "../../../../../UI/Icons";



const Video = () => {

  const ctx = useContext(AppContext);

  return (
    <CSSTransition
    in={ctx.videoState}
    timeout={1000}
    mountOnEnter
    unmountOnExit
    classNames={{
      enter: '',
      enterActive: 'open_video',
      exit: '',
      exitActive: 'close_video'
    }}
  >
    <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000000000
    }}>
      <button className='close_video_btn' onClick={() => ctx.toggleVideo()}><CloseMenuBtn/></button>
      <ReactPlayer controls width='1000px' height='500px' url='https://www.youtube.com/watch?v=7sDY4m8KNLc' />
      {/* <div style={{
        width: '500px',
        height: '500px',
        backgroundColor: 'red',
        margin: 'auto'
      }}></div> */}
    </div>
  </CSSTransition>
  );
};

export default Video;