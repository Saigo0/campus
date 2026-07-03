import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faAngleUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

function Carrossel({ images = [], selectedImage, setSelectedImage }) {
  const swiperRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 600 });
  return (
    <>
      {images.length > 0 && (
        <div className={isMobile ? "flex flex-col items-center" : "flex items-center"}>
          <button onClick={() => swiperRef.current?.slidePrev()} type="button">
            <FontAwesomeIcon
              icon={isMobile ? faAngleUp : faAngleLeft}
            ></FontAwesomeIcon>
          </button>
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            direction={isMobile ? "vertical" : "horizontal"}
            spaceBetween={20}
            slidesPerView={isMobile ? "auto" : 3}
            className="overflow-visible h-30 w-full md:h-40 md:w-full"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img.url}
                  alt="Imagem"
                  onClick={() => setSelectedImage(img)}
                  className={`object-cover w-full h-full rounded-xl cursor-pointer ${
                    selectedImage?.url === img.url
                      ? "border-3 border-[#1B3B99] dark:border-[#b6c4ff]"
                      : ""
                  }`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <button onClick={() => swiperRef.current?.slideNext()} type="button">
            <FontAwesomeIcon
              icon={isMobile ? faAngleDown : faAngleRight}
            ></FontAwesomeIcon>
          </button>
        </div>
      )}
    </>
  );
}

export default Carrossel;
