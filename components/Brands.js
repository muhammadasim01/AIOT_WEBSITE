import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const Brands = () => {
  const params = {
    slidesPerView: 5,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // Responsive breakpoints
    breakpoints: {
      1499: {
        slidesPerView: 5,
      },

      991: {
        slidesPerView: 3,
      },

      767: {
        slidesPerView: 3,
      },

      575: {
        slidesPerView: 2,
      },
    },
  };

  return (
    <div className="brand-one">
      <div className="brand-one__carousel owl-carousel owl-theme">
        <div className="swiper">
          <Swiper {...params}>
            <div className="item">
              <img src="/assets/images/resources/3m.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/resources/acronics.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/resources/APC.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/resources/bitdefender.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/resources/CISCO.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/resources/dellemc.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/resources/digicert.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/resources/Sap.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/resources/Dlink.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/resources/FORTINET.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/resources/fsecure.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/resources/IBM.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/resources/Kaspersky.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/resources/Lenovo.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/resources/shopify.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/resources/Solarwinds.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/resources/sophos.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/resources/suse.png" alt="" />
            </div>

            <div className="item">
              <img src="/assets/images/resources/Symantec.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/resources/Microsoft.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/resources/Veeam.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/resources/VMware.png" alt="" />
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Brands;
