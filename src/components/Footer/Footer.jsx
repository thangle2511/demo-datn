// import { useState } from "react";
import "./Footer.css";
import "./font/themify-icons-font/themify-icons/themify-icons.css";

function FooterPage() {
  return (
    <div id="main-footer" class="row">
      <div class="col content-footer">
        <a href="#">
          <img
            src="http://www.iotmind.vn/bitrix/templates/iotmind/img/MIND/logo_mind.png"
            alt="MIND IOT"
            class="logo-cty-bottom"
          ></img>
        </a>
      </div>
      <div class="col content-footer">
        <h4>Powered by</h4>
        <p>Lê Công Thắng</p>
        <p>Võ Đức Duy</p>
        <div class="social-list">
          <a href="https://www.facebook.com/IOTMIND.VN">
            <i class="ti-facebook"></i>
          </a>
          <a href="">
            {" "}
            <i class="ti-instagram"></i>
          </a>
          <a href="">
            {" "}
            <i class="ti-youtube"></i>
          </a>
          <a href="">
            {" "}
            <i class="ti-pinterest"></i>
          </a>
          <a href="">
            {" "}
            <i class="ti-twitter"></i>
          </a>
          <a href="">
            {" "}
            <i class="ti-linkedin"></i>
          </a>
        </div>
      </div>
      <div class="col content-footer">
        <h4>Liên Hệ</h4>
        <h3>Công ty TNHH Công nghệ MIND</h3>
        <p>
          <i class="ti-location-pin"></i> 377 Nguyễn Văn Linh - thành phố Đà
          Nẵng
        </p>
        <p>
          <i class="ti-mobile"></i> Phone:(+84) 905 559562
        </p>
        <p>
          <i class="ti-email"></i> Email:info@iotmind.vn
        </p>
      </div>
    </div>
  );
}

export default FooterPage;
