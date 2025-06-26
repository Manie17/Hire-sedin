import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Carouselimg from "../assets/carousel-img.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";

const Testimonial = () => {
  return (
    <div className="container cmn-container ">
      <div className="test-head text-h2">Testimonials</div>
      {/* Swiper Section */}
      <div
        className="something
    "
      >
        <Swiper
          spaceBetween={30}
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          autoplay
          loop={true}
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
          }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <div className="testi-body">
              <h1 className="pb-2 text-white">
                "Sedin Salesforce team has made a huge difference in
                productivity"
              </h1>
              <p className="testi-p">
                Sedin Salesforce team has made a huge difference in the
                productivity and stability of our business. We were quite
                impressed with their technical prowess, professionalism &
                outstanding communication.
              </p>
              <div className="test-footer d-flex align-items-center">
                <img
                  src={Carouselimg}
                  className="testi-img"
                  alt="Testimonial"
                />
                <div className="text-content px-2">
                  <p className="testi-name text-p1 text-white">Steve Soto</p>
                  <p className="testi-role text-white">CTO, Aroma360</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testi-body">
              <h1 className="pb-2 text-white">
                "Sedin Salesforce team has made a huge difference in
                productivity"
              </h1>
              <p className="testi-p">
                Sedin Salesforce team has made a huge difference in the
                productivity and stability of our business. We were quite
                impressed with their technical prowess, professionalism &
                outstanding communication.
              </p>
              <div className="test-footer d-flex align-items-center">
                <img
                  src={Carouselimg}
                  className="testi-img"
                  alt="Testimonial"
                />
                <div className="text-content px-2">
                  <p className="testi-name text-p1 text-white">Steve Soto</p>
                  <p className="testi-role text-white">CTO, Aroma360</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testi-body">
              <h1 className="pb-2 text-white">
                "Sedin Salesforce team has made a huge difference in
                productivity"
              </h1>
              <p className="testi-p">
                Sedin Salesforce team has made a huge difference in the
                productivity and stability of our business. We were quite
                impressed with their technical prowess, professionalism &
                outstanding communication.
              </p>
              <div className="test-footer d-flex align-items-center">
                <img
                  src={Carouselimg}
                  className="testi-img"
                  alt="Testimonial"
                />
                <div className="text-content px-2">
                  <p className="testi-name text-p1 text-white">Steve Soto</p>
                  <p className="testi-role text-white">CTO, Aroma360</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
  

     <div className="d-none d-xl-block">
      <div className="custom-swiper-button-prev ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 92 92"
          fill="none"
        >
          <g filter="url(#filter0_d_69_1420)">
            <circle
              cx="35"
              cy="35"
              r="35"
              transform="matrix(-1 0 0 1 78 10)"
              fill="#F8F9FA"
            />
          </g>
          <path
            d="M49.4098 32.3574L39.7676 41.9997L49.4098 51.6419"
            fill="#F8F9FA"
          />
          <path
            d="M49.4098 32.3574L39.7676 41.9997L49.4098 51.6419"
            stroke="#0176D3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <filter
              id="filter0_d_69_1420"
              x="0"
              y="0"
              width="100"
              height="100"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="7" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.00392157 0 0 0 0 0.462745 0 0 0 0 0.827451 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_69_1420"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_69_1420"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="custom-swiper-button-next ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 92 92"
          fill="none"
        >
          <g filter="url(#filter0_d_69_1420)">
            <circle
              cx="32"
              cy="32"
              r="32"
              transform="matrix(-1 0 0 1 78 10)"
              fill="#F8F9FA"
            />
          </g>
          <path
            d="M42.5902 32.3574L52.2324 41.9997L42.5902 51.6419"
            fill="#F8F9FA"
          />
          <path
            d="M42.5902 32.3574L52.2324 41.9997L42.5902 51.6419"
            stroke="#0176D3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <filter
              id="filter0_d_69_1426"
              x="0"
              y="0"
              width="100"
              height="100"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="7" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.00392157 0 0 0 0 0.462745 0 0 0 0 0.827451 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_69_1426"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_69_1426"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>  
    </div>
  );
};

export default Testimonial;
