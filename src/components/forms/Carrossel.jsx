import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Carrossel({ images = [], selectedImage, setSelectedImage }) {
  const swiperRef = useRef(null);
  return (
    <>
      {images.length > 0 && (
        <div className="flex">
          <button onClick={() => swiperRef.current?.slidePrev()} type="button">
            <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
          </button>
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={20}
            slidesPerView={3}
            className="w-full overflow-visible h-40"
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
            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          </button>
        </div>
      )}
    </>
  );
}

export default Carrossel;
