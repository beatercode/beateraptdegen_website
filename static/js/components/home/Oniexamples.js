import { Swiper, SwiperSlide } from "swiper/react";

import Warlord from "../../images/warlord.jpg";
import Soulstealer from "../../images/soulstealer.jpg";
import ShadowAssassin from "../../images/shadowassassin.jpg";
import Almighty from "../../images/almighty.jpg";
import Silenced from "../../images/silenced.jpg";

import "./Oniexamples.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from "swiper";

function Oniexamples() {
  return (
    <div className="oniexamples">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="oniimage" src={Warlord} alt="Warlord Oni" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="oniimage" src={Soulstealer} alt="Soulstealer Oni" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="oniimage" src={Almighty} alt="Almighty Oni" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="oniimage"
            src={ShadowAssassin}
            alt="Shadow Assassin Oni"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img className="oniimage" src={Silenced} alt="Silenced Oni" />
        </SwiperSlide>
      </Swiper>
      <div className="custom-pagination"></div>
    </div>
  );
}

export default Oniexamples;
