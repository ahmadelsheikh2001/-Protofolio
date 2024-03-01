import { createGlobalStyle } from "styled-components";

export const GlobalStleThemes = createGlobalStyle`
body {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.textColor};
}
.layout-container .content nav,
header {
  background-color: ${({ theme }) => theme.navbarBackColor}; 
}
.layout-container .content nav {
  background-color: ${({ theme }) => theme.navbarBackColor2}; 
}
header .main_navbar .navbar_controls .nav-control,
header .main_navbar .main_links .navlink {
  color: ${({ theme }) => theme.navLinks};
}
#dropDown_menu {
  background-color: ${({ theme }) => theme.navbarBackColor};
}
header .main_navbar .navbar_controls .nav-control button {
  color: ${({ theme }) => theme.textColor};
}
@media(max-width: 991px) {
  header .main_navbar .main_links {
    background-color: ${({ theme }) => theme.navbarBackColor};
  }
  header .main_navbar .main_links > li > .navlink svg path {
    fill: ${({ theme }) => theme.textColor};
    // fill: var(--main-dark);
  }
}
.single_project_data .forsale_project_data h3,
.hero_section .hero_text h1 {
  color: ${({ theme }) => theme.heroH1Color};
}
.hero_section .hero_text p {
  color: ${({ theme }) => theme.heroParaColor};
}
.sec_btn {
  color: ${({ theme }) => theme.heroH1Color};
  border: ${({ theme }) => theme.borderSecBtn};
}
.sec_btn:hover svg path {
  fill: ${({ theme }) => theme.secBtnHover};
}
.login_form .form_inputs,
.experiance_section,
.testimonials_section,
.workmates_section,
.features_section,
.some_works {
  background-color: ${({ theme }) => theme.featureBGK};
}
.some_works p {
  color: ${({ theme }) => theme.someworkP};
}
.some_works a {
  color: ${({ theme }) => theme.someworkA} !important;
}

.some_works.two {
  background-color: ${({ theme }) => theme.someworkTwo};
}
.some_works.one {
  background-color: ${({ theme }) => theme.someworkOne};
}
.some_works.three {
  background-color: ${({ theme }) => theme.someworkThree};
}
.some_works.four {
  background-color: ${({ theme }) => theme.someworkFour};
}
.features_section .features_cards_container .feature_card {
  background-color: ${({ theme }) => theme.featurecardBGK};
}
form.feedback_form h2,
.single_project_data .forsale_project_data h4,
.single_project_data .forsale_project_data ul li span:last-child,
.features_section .features_text h2 ,
.some_works h2,
.features_section .features_cards_container .feature_card .feature_card_title h4 {
  color: ${({ theme }) => theme.heroH1Color} !important;
}
.sec_btn:hover {
  border-color: var(--org-color) !important;
}
.num {
  color: ${({ theme }) => theme.featureNumColor};
}
.text_gray {
  color: ${({ theme }) => theme.textGrayColor};
}
.sec_btn .wave::before,
button.main_btn .wave::before,
button.hire_btn .wave::before {
  background: ${({ theme }) => theme.hireBtnBGK};
}
.social_section .social_container {
  background-color: ${({ theme }) => theme.socialContaienrGBK};
}
h2.section_title {
  color:  ${({ theme }) => theme.sectionTitleColor};
}
.side_border.gray::after {
  background: ${({ theme }) => theme.sideBorderColor};
}
.services_section .service_card {
  background: ${({ theme }) => theme.cardServiceBGKColor};
}
.services_section .service_card .service_card_title {
  color: ${({ theme }) => theme.heroH1Color};
}
.Some_Works {
  background: ${({ theme }) => theme.ssss};
}
.buy_section .single_buy_project .single_details_header .single_type,
.Some_Works .single_work_text .single_work_type {
  color: ${({ theme }) => theme.ProjectColorType}
}
.Some_Works .single_work_text .single_work_title  {
  color: ${({ theme }) => theme.heroH1Color};
}
.single_project-type {
  color: ${({ theme }) => theme.singleProjectTypeColor};
}
.single_project-type svg path {
  fill: ${({ theme }) => theme.singleProjectTypeColor};
}
.single_project-text {
  background: ${({ theme }) => theme.singleProjectTextBGK};
}
.single_project-Title {
  color: ${({ theme }) => theme.heroH1Color};
}
.testimonials_section .slick-slider > button,
.workmates_section .slick-slider > button,
.workmates_section .single_user 
.testimonials_section .single_user {
  background: ${({ theme }) => theme.carousalBGKColor};
}
.workmates_section ,
.testimonials_section {
  background-color: ${({ theme }) => theme.featureBGK};
}
.blog_section .last_blog_text h3,
.contact_section h5,
.workmates_section .single_user .single_user_name ,
.testimonials_section .single_user .single_user_name {
  color: ${({ theme }) => theme.heroH1Color};
}
.workmates_section .single_user .single_user_name svg path ,
.testimonials_section .single_user .single_user_name svg path {
  fill: ${({ theme }) => theme.heroH1Color};

}
.workmates_section .single_user .single_user_job ,
.testimonials_section .single_user .single_user_job {
  color: ${({ theme }) => theme.TestUSerJobColor};
}
.workmates_section .single_user .single_user_job svg path ,
.testimonials_section .single_user .single_user_job svg path {
  fill: ${({ theme }) => theme.TestUSerJobColor};
}
.wave-contact,
.single_project_page_header,
.contact_section,
.about_hero .about_text {
  background: ${({ theme }) => theme.aboutTextBGKColor};
}
.why_me_section .card {
  background: ${({ theme }) => theme.aboutWhyCardBGKColor};
}
.why_me_section .card div:first-child {
  background: ${({ theme }) => theme.aboutWhyCardDivBGKColor};
}
.user_profile .edit_info h4,
.user_profile ul li button,
form.feedback_form ul li label,
.single_project_page_header ul li:last-child,
.blog_list_section .blog_cart .single_blog_text .blog_title,
.about_hero .about_text h3,
.why_me_section .card div:last-child {
  color: ${({ theme }) => theme.heroH1Color};
}
.why_me_section .card svg path {
  fill: ${({ theme }) => theme.fillWhyCardSVG};
}
.experiance_section .card {
  background: ${({ theme }) => theme.aboutexperianceCardBGKColor};
}
.experiance_section .card .comp-data h4{
  color: ${({ theme }) => theme.textGrayColor};
}
.blog_section .last_blog_text {
  background: ${({ theme }) => theme.blogTextBGKColor};
}
.container_fluid .sidebar {
  background: ${({ theme }) => theme.sidebarBGK};
  background-size: cover;
}
.user_profile .edit_info h5 svg path,
.content.purchases_content .course_box .course_destails a svg path,
.appoinment_content .appoinment_box p svg path,
.content.info_content .content_box h3 svg path,
.user_profile ul li button svg path,
form.feedback_form .input_icons svg.show_password path,
.login_form .form_inputs .input_control h5 svg path,
form.feedback_form h2 svg path,
form.new_project p.form_1_p a svg path,
form.feedback_form .input_control h2 svg path,
 form.feedback_form h2 svg path,
 .some_works svg path {
  fill: ${({ theme }) => theme.svgPathFill};
}
form.feedback_form .input_control input {
  color: ${({ theme }) => theme.inputColor}
}
form.feedback_form .input_control input::placeholder {
  color: ${({ theme }) => theme.placeHolderColor}
}
.btn_back {
  color: ${({ theme }) => theme.backBrnColor}
}
form.feedback_form ul li label {
  background: ${({ theme }) => theme.labelBGK};
}
form.feedback_form .input_control input:focus,
form.feedback_form ul li input:checked + label {
  border-color: ${({ theme }) => theme.borderCheckColor};
}
form.feedback_form .input_control input.invalid {
  border-color: #E24B4B;
}
form.feedback_form .input_control input.valid_input {
  border-color: #31D0AA;
}

form.new_project ul li label {
  border-color: ${({ theme }) => theme.heroH1Color};
}
form.new_project ul li input:checked + label {
  border-color: #774A9F;
}
form.new_project ul li label svg path {
  fill: ${({ theme }) => theme.heroH1Color};
}
form.new_project p.form_1_p {
  color: ${({ theme }) => theme.form_1_p}
}
.login_signup {
  color: ${({ theme }) => theme.login_signup}
}
.user_profile ul li button.active svg path {
  fill: ${({ theme }) => theme.borderCheckColor}
}
.user_profile ul li button.active {
  color: ${({ theme }) => theme.borderCheckColor};
  border-color: ${({ theme }) => theme.borderCheckColor};
}
.login_layout .right {
  background: ${({ theme }) => theme.loginRightBGK}; 
}
.appoinment_content .appoinment_box,
.user_profile .content.courses_content .course_box {
  background: ${({ theme }) => theme.uesrContentBoxBGK}; 
}
.appoinment_content .appoinment_box button, 
.content.courses_content .course_box .course_destails button {
  color: #E24B4B;
}
.appoinment_content .appoinment_box button svg path, 
.content.courses_content .course_box .course_destails button svg path {
  fill: #E24B4B;
}
.backdrop {
  background: ${({ theme }) => theme.backdropBGK}; 
}
.modale {
  background: ${({ theme }) => theme.modaleBGK}; 
}
.user_profile .edit_info input {
  color: ${({ theme }) => theme.inputModalColor}
}
.user_profile .edit_info div.btns button:first-of-type {
  border-color: ${({ theme }) => theme.borderCancleColor};
  color: ${({ theme }) => theme.borderCancleColor};
}
@media(min-width: 992px) {
  header .main_navbar .navbar_controls .nav-control button > svg:last-of-type path,
header .main_navbar .main_links button svg:last-of-type path {
  stroke: ${({ theme }) => theme.strokeColorArrowDown};
}
}
header .main_navbar .navbar_controls #dropDown_menu li button > svg:last-of-type path {
  stroke: transparent
}
.layout-container .sidebar-content {
  background: ${({ theme }) => theme.SidebarBGKColor}; 
}
header .logo button svg path,
.header_menu button svg path {
  fill:  ${({ theme }) => theme.textColor};
}
@media(max-width: 991px) {
  header .main_navbar .navbar_controls .nav-control button > svg path, 
  header .main_navbar .main_links button > svg path {
  stroke: ${({ theme }) => theme.strokeColorArrowDown};
  }
}
.resume-content svg path,
.resume-header .right a svg path,
.resume-header .left p svg path,
.resume-header .left h4 svg path {
  fill:  ${({ theme }) => theme.heroH1Color}
}
.date svg path {
  fill:  var(--org-color);
}
.resume-content .right .skills_card ul li::after {
  background: ${({ theme }) => theme.heroH1Color}; 
}
.resume-content .right .skills_card ul,
.resume-content .right .skills_card h4,
.resume-header .left h4,
.resume-header .left p,
.contentsectiontitle,
.resume-header .right a {
  color: ${({ theme }) => theme.heroH1Color};
}
.features_section .features_text p  {
  color: ${({ theme }) => theme.textColor50} !important;
}
.tabs_container button {
  color: ${({ theme }) => theme.heroH1Color};
}
.tabs_container button svg path {
  fill: ${({ theme }) => theme.heroH1Color};
}
.tabs_container button::after {
  background-color: ${({ theme }) => theme.heroH1Color};
}
.place-holder {
  color: ${({ theme }) => theme.inputPlaceHolderColor};
}
.social_contact li:nth-child(4) p,
.social_section .social_container li:nth-child(4):hover p {
  color: ${({ theme }) => theme.MediuColor};
}
.social_contact li:nth-child(4) svg path,
.social_section .social_container li:nth-child(4):hover svg path {
  fill: ${({ theme }) => theme.MediuColor};
}
.social_contact li {
  background-color: ${({ theme }) => theme.bgkIconSocial};
}
.scroll-top-btn svg path {
  fill: ${({ theme }) => theme.scrollBtnColor};
}
.project_list_container .parent a  {
  color: ${({ theme }) => theme.heroH1Color};
}
.project_list_container .parent a svg path {
  transition: .3s ease-in-out;
}
.project_list_container .parent a:hover svg path {
  fill: var(--org-color);
}
.project_list_container .parent a:hover {
  color: var(--org-color)};
}
.social_contact li:nth-child(4):hover .icon {
  border-color: ${({ theme }) => theme.MediuColor}
}
/* // last edit  */
#dropDown_menu li a .icon_box{
  background-color: ${({ theme }) => theme.icon_box_bg};
}
.some_works .project_content .num p span {
  color: ${({ theme }) => theme.slider_num};
}
.bullets_controls span {
  background-color: ${({ theme }) => theme.bullets_color};
;
}
.workmates_section .single_user {
    background-color: ${({ theme }) => theme.workmates_bg};
}
.workmates_section .header-testimonial .arrows svg > path {
    fill: ${({ theme }) => theme.workmates_arrow};
}
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) =>
      theme.body} inset !important;
      -webkit-text-fill-color: ${({ theme }) => theme.textGrayColor};
      -webkit-background-clip: text;
}
.new_project .admin_card{
  background-color: ${({ theme }) => theme.admin_card_bg};
}
.new_project .admin_card p{
 color: ${({ theme }) => theme.admin_card_p};
}
.social_section .social_container li:nth-child(6):hover p {
    /* color: #00a6de; */
    color:${({ theme }) => theme.twitter_p} ;
}
.social_section .social_container li:nth-child(6):hover svg {
    fill:${({ theme }) => theme.textGrayColor}
}
.testimonials_section .single_user {
    background-color: ${({ theme }) => theme.workmates_bg};
}
.testimonials_section .single_user .single_user_reactions .emoji_box {
    background-color: ${({ theme }) => theme.reactions_bg};
}
/* Dashboard */
.admin_layout .admin_navbar .langs{
  display: none !important;
}
.admin_navbar h2{
  color:${({ theme }) => theme.heroH1Color}
}
.table_filter .search_input,
.table_filter .cases_input{
  background-color: ${({ theme }) => theme.carousalBGKColor};
  color:${({ theme }) => theme.select_color}
}
.table_filter .cases_input select{
  color:${({ theme }) => theme.select_color}
}
.admin_card .card_bgk{
  background-color: ${({ theme }) => theme.reactions_bg};
  
}
.admin_layout .admin_sidebar:lang(en) > div {
  left: 0;
  padding-left: 20px;
  padding-right: 0;
  direction: ltr;
}
.admin_layout .admin_sidebar:lang(en) > div > ul li a.active::after {
    content: "";
    left: 97%;
  }
  .admin_navbar .icons .icon_box svg path,
  .label_input svg path {
    fill:${({ theme }) => theme.heroH1Color}
  }

  .admin_navbar .icons .navbar_controls .nav-control,
  .admin_navbar .icons .icon_box {
  background-color: ${({ theme }) => theme.nav_box_bg};
  color:${({ theme }) => theme.heroH1Color}
}
.admin_navbar .icons .navbar_controls .nav-control {
    padding: 10px 14px;
    border-radius: var(--radius);
    min-width: 50px;
    min-height: 50px;
    display: flex;
    align-items: center;
    gap: 12px;
    text-align: center;
}

/* login */
/* .login_section {
  background-color: ${({ theme }) => theme.login_welcome};
} */
.login_section .welcome_box{
  background-color: ${({ theme }) => theme.login_welcome};
}
.login_section form{
  background-color: ${({ theme }) => theme.login_form};
}
`;

export const ligthTheme = {
  body: "var(--white)",
  textColor: "var(--main-dark)",
  navbarBackColor: "var(--white)",
  navbarBackColor2: "var(--white)",
  navLinks: "var(--black)",
  heroH1Color: "var(--main-purple)",
  heroParaColor: "#3A3A48",
  borderSecBtn: "1px solid var(--main-purple)",
  featureBGK: "rgb(51 28 72 / 3%)", //edit_khaled
  someworkOne: "#fbfafb",
  someworkTwo: "#fffdfb",
  someworkThree: "#fcfcff",
  someworkFour: "#fffdfb",
  someworkP: "#7e7d7e",
  someworkA: "var(--main-purple)",
  featurecardBGK: "var(--white)",
  featureNumColor: "rgb(14 27 54 / 20%)",
  textGrayColor: "var(--black)",
  hireBtnBGK: "url(./assets/wave2.png)",
  waveHireColor: "var(--org-color)",
  waveColor: "var(--org-color)",
  WaveBGK: "url(./assets/wave2.png)",
  waveSecColor: "var(--main-purple)",
  WaveSecBGK: "url(./assets/wave3.png)",
  socialContaienrGBK: "var(--white)",
  sectionTitleColor: "var(--main-purple)",
  sideBorderColor: "#C9BED4",
  cardServiceBGKColor: "rgb(51 28 72 / 1%)",
  ProjectColorType: "rgb(51 28 72 / 50%)",
  singleProjectTypeColor: "rgb(51 28 72 / 50%)",
  singleProjectTextBGK: "var(--white)",
  carousalBGKColor: "var(--white)",
  TestUSerJobColor: "rgb(51 28 72 / 50%)",
  aboutTextBGKColor:
    "linear-gradient(to top right, rgb(51, 28, 72, 5%), rgb(255, 148, 82, 5%) 100%, rgb(212, 190, 210, 5%))",
  aboutWhyCardBGKColor: "rgb(51, 28, 72, 1%)",
  aboutWhyCardDivBGKColor: "rgb(51, 28, 72, 5%)",
  aboutexperianceCardBGKColor: "var(--white)",
  blogTextBGKColor: "rgb(245, 239, 255, 30%)",
  secBtnHover: "var(--white)",
  sidebarBGK: "url('../images/Group 35967.svg') no-repeat",
  svgPathFill: "#331C48",
  inputColor: "black",
  placeHolderColor: "",
  backBrnColor: "var(--main-purple)",
  labelBGK: "",
  borderCheckColor: "var(--main-purple)",
  form_1_p: "#444444",
  login_signup: "#171717",
  loginRightBGK: "",
  uesrContentBoxBGK: "rgb(245 239 255 / 30%)",
  DeleteBtnColor: "var(--main-purple)",
  backdropBGK: "rgba(51, 28, 72, 70%)",
  modaleBGK: "#FFF",
  inputModalColor: "#00000",
  strokeColorArrowDown: "#3A3A48",
  SidebarBGKColor: "var(--main-purple)",
  textColor50: "rgb(0 0 0 / 50%)",
  inputPlaceHolderColor: "var(--main-purple)",
  MediuColor: "#000",
  bgkIconSocial: "#fff",
  scrollBtnColor: "#FFF",
  icon_box_bg: "#e8e8e8cc",
  slider_num: "var(--org-purple)",
  bullets_color: "var(--main-purple)",
  workmates_bg: "var(--white)",
  workmates_arrow: "var(--main-purple)",
  admin_card_bg: "#f9f8f9",
  admin_card_p: "#7e7e7d",
  twitter_p: "var(--black)",
  reactions_bg: "#f2eeed",
  card_bg: "#f4f0ee",
  select_color: "var(--main-purple)",
  nav_box_bg: "#f3f1f5",
  login_bg: "transparent",
  login_welcome:'#fcf8f6'
};

export const DarkTheme = {
  body: "var(--main-dark)",
  textColor: "var(--white)",
  navbarBackColor: "var(--light-purple)",
  navbarBackColor2: "transparent",
  navLinks: "var(--white)",
  heroH1Color: "var(--white)",
  heroParaColor: "var(--white)",
  borderSecBtn: "1px solid var(--white)",
  featureBGK: "rgb(119 74 159 / 10%)",
  someworkOne: "rgb(119 74 159 / 10%)",
  someworkTwo: "rgb(119 74 159 / 10%)",
  someworkThree: "rgb(119 74 159 / 10%)",
  someworkFour: "rgb(119 74 159 / 10%)",
  someworkP: "rgba(255, 255, 255, 0.5)",
  someworkA: "var(--white)",
  featurecardBGK: "rgb(135 118 151 / 10%)",
  featureNumColor: "rgb(255 255 255 / 50%)",
  textGrayColor: "var(--white)",
  hireBtnBGK: "url(./assets/wave2.png)",
  waveHireColor: "var(--org-color)",
  waveColor: "var(--org-color)",
  WaveBGK: "url(./assets/wave2.png)",
  waveSecColor: "var(--org-color)",
  WaveSecBGK: "url(./assets/wave2.png)",
  socialContaienrGBK: "var(--light-purple)",
  sectionTitleColor: "var(--white)",
  sideBorderColor: "rgb(135 118 151 / 20%)",
  cardServiceBGKColor: "rgb(135 118 151 / 10%)",
  ssss: "transparent",
  ProjectColorType: "rgb(255 255 255 / 50%)",
  singleProjectTypeColor: "rgb(255 255 255 / 70%)",
  singleProjectTextBGK: "#14081e",
  carousalBGKColor: "#20132B",
  TestUSerJobColor: "rgb(255 255 255 / 50%)",
  aboutTextBGKColor: "rgb(135, 118, 151, 10%)",
  aboutWhyCardBGKColor: "rgb(135, 118, 151, 10%)",
  aboutWhyCardDivBGKColor: "rgb(135, 118, 151, 10%)",
  fillWhyCardSVG: "var(--white)",
  aboutexperianceCardBGKColor: "rgb(135, 118, 151, 10%)",
  blogTextBGKColor: "rgb(135 118 151 / 10%)",
  secBtnHover: "var(--main-purple)",
  sidebarBGK: "url('../images/Rectangle.svg') no-repeat",
  svgPathFill: "#fff",
  inputColor: "#fff",
  placeHolderColor: "#877697",
  backBrnColor: "#877697",
  labelBGK: "rgb(135 118 151 / 10%)",
  borderCheckColor: "var(--org-color)",
  form_1_p: "#FFFFFF",
  login_signup: "#FFFFFF",
  loginRightBGK: "#20132B",
  uesrContentBoxBGK: "rgb(135 118 151 / 10%)",
  DeleteBtnColor: "#877697",
  backdropBGK: "rgb(0 0 0 / 80%)",
  modaleBGK: "#20132B",
  inputModalColor: "#FFF",
  borderCancleColor: "#FFF",
  strokeColorArrowDown: "#fff",
  SidebarBGKColor: "#20132B",
  textColor50: "rgb(255 255 255 / 50%)",
  inputPlaceHolderColor: "#877697",
  MediuColor: "#FFF",
  bgkIconSocial: "rgba(135, 118, 151, 0.2)",
  scrollBtnColor: "var(--main-purple)",
  icon_box_bg: "transparent",
  slider_num: "var(--org-color)",
  bullets_color: "#4a2b66",
  workmates_bg: "var(--light-purple)",
  workmates_arrow: "var(--white)",
  admin_card_bg: "var(--light-purple)",
  admin_card_p: "var(--white)",
  twitter_p: "#dee2e6",
  reactions_bg: "var(--main-purple)",
  card_bg: "#f4f0ee",
  select_color: "rgba(255, 255, 255, 0.5)",
  nav_box_bg: "var(--main-purple)",
  login_bg: "var(--light-purple)",
  login_welcome:'var(--light-purple)',
  login_form:'var(--light-purple)'

};
