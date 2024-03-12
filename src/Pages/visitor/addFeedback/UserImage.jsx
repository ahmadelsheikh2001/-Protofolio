import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import { CloseBtn, CloseEvent } from "../../../UI/Icons";

const UserProfileImage = (props) => {
  const addImageIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="26"
      viewBox="0 0 32 26"
      fill="none"
    >
      <path
        d="M29.9836 20.2064H28.7639V18.9867C28.7639 18.7427 28.7029 18.509 28.5911 18.3057V18.2955C28.3472 17.8076 27.8288 17.4621 27.2393 17.4621C26.6497 17.4621 26.1314 17.8076 25.8874 18.2955V18.3057C25.7756 18.509 25.7147 18.7427 25.7147 18.9867V20.2064H24.5051C23.6615 20.2064 22.9805 20.8874 22.9805 21.731C22.9805 22.5747 23.6615 23.2557 24.5051 23.2557H25.7147V24.4753C25.7147 25.319 26.3956 26 27.2393 26C28.0829 26 28.7639 25.319 28.7639 24.4753V23.2557H29.9836C30.8273 23.2557 31.5082 22.5747 31.5082 21.731C31.5082 20.8874 30.8273 20.2064 29.9836 20.2064Z"
        fill="#774A9F"
      />
      <path
        d="M21.8733 23.2557C21.6091 22.8084 21.4566 22.2901 21.4566 21.731C21.4566 21.1822 21.6091 20.6536 21.8733 20.2064C22.351 19.3831 23.2048 18.7936 24.2111 18.7021C24.3025 17.6958 24.8921 16.8319 25.7154 16.3542C26.1626 16.0899 26.6809 15.9375 27.24 15.9375C27.799 15.9375 28.3174 16.0899 28.7646 16.3542V7.04381C28.7646 5.1838 27.2603 3.67945 25.4104 3.67945H21.0297C20.9179 3.67945 20.796 3.60835 20.7553 3.51681L19.932 1.84988C19.3526 0.711503 18.1939 0 16.9234 0H11.8413C10.5911 0 9.41206 0.721691 8.84287 1.86008L8.01955 3.49648C7.96872 3.60835 7.85691 3.67944 7.73492 3.67944H3.36437C1.50429 3.67944 0 5.1838 0 7.0438V19.9015C0 21.7514 1.50429 23.2557 3.36437 23.2557H21.8733V23.2557ZM14.3823 7.91115C17.202 7.91115 19.4813 10.2074 19.4813 13.0102C19.4813 15.8129 17.202 18.1091 14.3823 18.1091C11.5796 18.1091 9.28331 15.8129 9.28331 13.0102C9.28332 10.2074 11.5796 7.91115 14.3823 7.91115V7.91115Z"
        fill="#774A9F"
      />
      <path
        d="M14.379 9.99042C12.5574 9.99042 11.0762 11.4716 11.0762 13.2869C11.0762 15.1085 12.5574 16.5835 14.379 16.5835C16.1943 16.5835 17.6755 15.1085 17.6755 13.2869C17.6755 11.4716 16.1943 9.99042 14.379 9.99042V9.99042Z"
        fill="#774A9F"
      />
    </svg>
  );

  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const openCamera = async (e) => {
    e.preventDefault();
    setIsCameraOpen(true);
  };
  const captureImage = (e) => {
    e.preventDefault();
  };
  const openFileInput = (e) => {
    e.preventDefault();

    // Trigger the click event on the hidden file input
    document.getElementById("fileInput").click();
    // setIsOpen(false);
  };

  const handelOpenModel = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const changeImageHandeler = () => {
    props.onChangeImage();
    setIsOpen(false);
  };

  // CAMERA
  const videoConstraints = {
    width: 140,
    facingMode: "environment",
  };
  const webcamRef = useRef(null);
  const [url, setUrl] = React.useState(null);

  const capturePhoto = React.useCallback(
    async (e) => {
      e.preventDefault();
      const imageSrc = webcamRef.current.getScreenshot();
      // setUrl(imageSrc);
      props.onAddImgFromCamera(imageSrc);
      setIsCameraOpen(false);
      console.log(isCameraOpen);
    },
    [webcamRef, isCameraOpen, props]
  );

  const onUserMedia = (e) => {
    console.log(e);
  };
  return (
    <>
      <motion.div
        initial={{ y: 500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1, bounce: 0.3 }}
        className="image_user_input"
      >
        <button
          onClick={handelOpenModel}
          id="user-img"
          // type="file"
          // accept="image/*,capture=camera"
          className="d-none"
        />
        <img src={props.userImage} className="image-fluid" />
        <label htmlFor="user-img">{addImageIcon}</label>
      </motion.div>
      {isOpen && (
        <div className="model_container">
          <div className="cam_model">
            <h2>Choose Method</h2>
            <div className="cam_inputs">
              <div className="input_card" onClick={openCamera}>
                <img src="/assets/camera.svg" />
                <button onClick={() => setIsOpen(false)}> Camera</button>
              </div>
              <div className="input_card" onClick={openFileInput}>
                <img src="/assets/studio.svg" />
                <button>Gallery</button>
              </div>
            </div>

            <input
              onInput={props.onChangeImage}
              onChange={() => setIsOpen(false)}
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              accept="image/*"
            />
            <div className="close" onClick={() => setIsOpen(false)}>
              <span>
                <CloseBtn />
              </span>
            </div>
          </div>
          <div className="overlay"></div>
        </div>
      )}

      {isCameraOpen && (
        <div className="model_container camera">
          <div className="cam_model">
            <div className="position-relative">
              <Webcam
                ref={webcamRef}
                audio={true}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
                onUserMedia={onUserMedia}
              />
              <button className='capture_img' onClick={capturePhoto}></button>
            </div>
          </div>
          <div className="overlay"></div>
        </div>
      )}
    </>
  );
};

export default UserProfileImage;
