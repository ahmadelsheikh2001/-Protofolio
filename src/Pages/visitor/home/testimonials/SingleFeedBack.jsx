import { useTranslation } from "react-i18next";

const SingleFeedBack = (props) => {
  const userIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2770_28690)">
        <path
          d="M12 12C13.1867 12 14.3467 11.6481 15.3334 10.9888C16.3201 10.3295 17.0892 9.39246 17.5433 8.2961C17.9974 7.19975 18.1162 5.99335 17.8847 4.82946C17.6532 3.66558 17.0818 2.59648 16.2426 1.75736C15.4035 0.918247 14.3344 0.346802 13.1705 0.115291C12.0067 -0.11622 10.8003 0.00259972 9.7039 0.456726C8.60754 0.910851 7.67047 1.67989 7.01118 2.66658C6.35189 3.65328 6 4.81331 6 6C6.00159 7.59081 6.63424 9.11602 7.75911 10.2409C8.88399 11.3658 10.4092 11.9984 12 12ZM12 2C12.7911 2 13.5645 2.2346 14.2223 2.67412C14.8801 3.11365 15.3928 3.73836 15.6955 4.46927C15.9983 5.20017 16.0775 6.00444 15.9231 6.78036C15.7688 7.55629 15.3878 8.26902 14.8284 8.82843C14.269 9.38784 13.5563 9.7688 12.7804 9.92314C12.0044 10.0775 11.2002 9.99827 10.4693 9.69552C9.73836 9.39277 9.11365 8.88008 8.67412 8.22228C8.2346 7.56449 8 6.79113 8 6C8 4.93914 8.42143 3.92172 9.17157 3.17158C9.92172 2.42143 10.9391 2 12 2Z"
          fill="#331C48"
        />
        <path
          d="M12 14C9.61386 14.0026 7.32622 14.9517 5.63896 16.639C3.95171 18.3262 3.00265 20.6139 3 23C3 23.2652 3.10536 23.5196 3.29289 23.7071C3.48043 23.8946 3.73478 24 4 24C4.26522 24 4.51957 23.8946 4.70711 23.7071C4.89464 23.5196 5 23.2652 5 23C5 21.1435 5.7375 19.363 7.05025 18.0503C8.36301 16.7375 10.1435 16 12 16C13.8565 16 15.637 16.7375 16.9497 18.0503C18.2625 19.363 19 21.1435 19 23C19 23.2652 19.1054 23.5196 19.2929 23.7071C19.4804 23.8946 19.7348 24 20 24C20.2652 24 20.5196 23.8946 20.7071 23.7071C20.8946 23.5196 21 23.2652 21 23C20.9974 20.6139 20.0483 18.3262 18.361 16.639C16.6738 14.9517 14.3861 14.0026 12 14Z"
          fill="#331C48"
        />
      </g>
      <defs>
        <clipPath id="clip0_2770_28690">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const jobIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.9998 3.99975H17.9002C17.668 2.87115 17.0539 1.8571 16.1612 1.12852C15.2685 0.399939 14.152 0.00137452 12.9998 0L11.0002 0C9.84801 0.00137452 8.73146 0.399939 7.83881 1.12852C6.94615 1.8571 6.33196 2.87115 6.09975 3.99975H5.00025C3.67459 4.00134 2.40368 4.52866 1.46629 5.46604C0.528908 6.40343 0.00158786 7.67434 0 9L0 18.9998C0.00158786 20.3254 0.528908 21.5963 1.46629 22.5337C2.40368 23.4711 3.67459 23.9984 5.00025 24H18.9998C20.3254 23.9984 21.5963 23.4711 22.5337 22.5337C23.4711 21.5963 23.9984 20.3254 24 18.9998V9C23.9984 7.67434 23.4711 6.40343 22.5337 5.46604C21.5963 4.52866 20.3254 4.00134 18.9998 3.99975ZM11.0002 2.00025H13.0005C13.6188 2.00278 14.2213 2.19631 14.7254 2.55437C15.2295 2.91242 15.6107 3.41751 15.8168 4.0005H8.184C8.39006 3.41751 8.77122 2.91242 9.27535 2.55437C9.77947 2.19631 10.3819 2.00278 11.0002 2.00025ZM5.00025 6H18.9998C19.7954 6 20.5585 6.31607 21.1211 6.87868C21.6837 7.44129 21.9998 8.20435 21.9998 9V12H2.00025V9C2.00025 8.20435 2.31632 7.44129 2.87893 6.87868C3.44154 6.31607 4.2046 6 5.00025 6ZM18.9998 21.9998H5.00025C4.2046 21.9998 3.44154 21.6837 2.87893 21.1211C2.31632 20.5585 2.00025 19.7954 2.00025 18.9998V14.0002H11.0002V15C11.0002 15.2652 11.1056 15.5196 11.2932 15.7072C11.4807 15.8948 11.7351 16.0001 12.0004 16.0001C12.2656 16.0001 12.52 15.8948 12.7076 15.7072C12.8951 15.5196 13.0005 15.2652 13.0005 15V14.0002H22.0005V19.0005C22.0005 19.7961 21.6844 20.5592 21.1218 21.1218C20.5592 21.6844 19.7961 22.0005 19.0005 22.0005L18.9998 21.9998Z"
        fill="#877697"
      />
    </svg>
  );
  // edit_khaled
  const lang = localStorage.getItem("lang");
  const { t, i18n } = useTranslation();

  const reactions = [
    {
      id: "happy",
      text: `${t("Happy")}`,
      dataType: "happy",
      icon: "./assets/Helper.gif",
    },
    {
      id: "serious",
      text: `${t("Serious")}`,
      dataType: "serious",
      icon: "./assets/Helper.gif",
    },
    {
      id: "diligent",
      text: `${t("Diligent")}`,
      dataType: "diligent",
      icon: "./assets/Diligent.gif",
    },
    {
      id: "friendly",
      text: `${t("Friendly")}`,
      dataType: "diligent",
      icon: "./assets/Friendly.gif",
    },
    {
      id: "intelligent",
      text: `${t("Intelligent")}`,
      dataType: "diligent",
      icon: "./assets/Intelligent.gif",
    },
  ];

const apiUrl = process.env.REACT_APP_API_URL
  return (
    //start edit_khaled
    <div
      className="single_user side_border flex"
      style={{ direction: `${lang === "ar" ? "rtl" : "ltr"}` }}
    >
      {/*//end edit_khaled*/}
      <div className="single_user_image">
        <img  src={props.image? apiUrl + props.image: props.src} />
        <div className="d-md-none d-flex">
          <div className="single_user_name flex">
            {userIcon}
            {props.name}
          </div>
          <div className="single_user_job flex">
            {jobIcon}
            {props.job}
          </div>
        </div>
      </div>
      <div className="single_user_details">
        <p className="text_gray single_comment" style={{width:"90%", margin:"auto", wordBreak:"break-all"}}>{props?.message?.slice(0,300)}</p>
        <ul className="single_user_reactions">
          {reactions.map((react, i) => {
            if (props?.reactions?.includes(react.id)) {
              return (
                <div className="emoji_box">
                  <img src={react.icon} alt="icon" />
                  <p>{react.text}</p>
                </div>
              )
            }
          })}
        </ul>
        <div className="single_user_name flex d-none d-md-flex">
          {userIcon}
          {props.name}
        </div>
        <div className="single_user_job flex d-none d-md-flex">
          {jobIcon}
          {props.job}
        </div>
      </div>
    </div>
  );
};

export default SingleFeedBack;
