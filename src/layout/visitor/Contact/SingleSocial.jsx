const SingleSocial = (props) => {
  const lang = localStorage.getItem("lang");
  return (
    <li>
      <a href="#" 
      style={{ direction: `${lang === "en" ? "ltr" : "rtl"}` }}> 
        <div className="icon">{props.icon}</div>
        <p className="d-none d-md-block">{props.text}</p>
      </a>
    </li>
  );
};

export default SingleSocial;
