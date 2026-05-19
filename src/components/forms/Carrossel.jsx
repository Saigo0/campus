import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faDiagramNext } from "@fortawesome/free-solid-svg-icons";

function Carrossel({images = []}) {
  let swiperInstance = null;
  const swiperRef = useRef(null);
  return (
    <div className="flex">
      <button onClick={() => swiperRef.current?.slidePrev()}><FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon></button>
      <Swiper
      onSwiper={(swiper) => {
    swiperRef.current = swiper;
  }}
        spaceBetween={50}
        slidesPerView={3}
        className="w-full overflow-visible h-40"
      >
        {images.map((img) => (
          <SwiperSlide><img src={img.url} alt="Imagem" className="object-cover w-full h-full"/></SwiperSlide>
        ))}
      </Swiper>
      <button onClick={() => swiperRef.current?.slideNext()}><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></button>
    </div>
  );
}

export default Carrossel;
