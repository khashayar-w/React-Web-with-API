import navIcon1 from "./assets/icon/nav-icon1.svg"
import navIcon2 from  "./assets/icon/nav-icon2.svg"
import navIcon3 from "./assets/icon/nav-icon3.svg"




function Footer() {
    return (
      <div className=" bg-dark p-2 ">
        <div className="f-container d-flex justify-content-around align-baseline">
          <div className="social-icon ">
            <a href="#">
              <img src={navIcon1} alt="" />
            </a>
            <a href="#">
              <img src={navIcon2} alt="" />
            </a>
            <a href="#">
              <img src={navIcon3} alt="" />
            </a>
          </div>
          <div className="copy-right">
            <p className="text-light">Copyright 2024. All Rights Reserved</p>
          </div>
        </div>
      </div>
    );
}

export default Footer;