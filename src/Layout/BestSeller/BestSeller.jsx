import React from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SellerPlant1 from "../../assets/Images/Seller_Plant1.png";
import SellerPlant2 from "../../assets/Images/Seller_Plant2.png";
import SellerPlant3 from "../../assets/Images/Seller_Plant3.png";
import SellerCard from "../../Components/SellerCard/SellerCard";
import "./BestSeller.scss";
const BestSeller = () => {
  return (
    <section className="BestSeller" id="BestSeller">
      <div className="BestSeller-main">
        <div className="BestSeller-left">
          <h1 className="Main-heading">Best Seller Product</h1>
        </div>
        <div className="BestSeller-right">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            rewind={true}
            allowSlideNext={true}
            allowSlidePrev={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              590: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <SellerCard imgsrc={SellerPlant1} />
            </SwiperSlide>
            <SwiperSlide>
              <SellerCard imgsrc={SellerPlant2} />
            </SwiperSlide>
            <SwiperSlide>
              <SellerCard imgsrc={SellerPlant3} />
            </SwiperSlide>
            <SwiperSlide>
              <SellerCard imgsrc={SellerPlant1} />
            </SwiperSlide>
            <SwiperSlide>
              <SellerCard imgsrc={SellerPlant2} />
            </SwiperSlide>
            <SwiperSlide>
              <SellerCard imgsrc={SellerPlant3} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
