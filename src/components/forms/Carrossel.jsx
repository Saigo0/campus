import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Carrossel({ images = [] }) {
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
            {images.map((img) => (
              <SwiperSlide>
                <img
                  src={img.url}
                  alt="Imagem"
                  className="object-cover w-full h-full rounded-xl"
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
