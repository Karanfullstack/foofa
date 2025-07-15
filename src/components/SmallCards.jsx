import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const data = [
    { price: 500, text: "Bon do wykorzystania w Media Expert" },
    { price: 400, text: "Karta podarunkowa Allegro" },
    { price: 300, text: "Voucher do Empik" },
    { price: 200, text: "Bon do wykorzystania w Media Markt" },
    { price: 100, text: "Doładowanie Google Play" },
    { price: 50, text: "Zniżka na Spotify Premium" },
    { price: 25, text: "Voucher do Biedronki" },
    { price: 10, text: "Zniżka na Uber" },
    { price: 5, text: "Mała nagroda za udział" },
];

export default function SmallCards() {
    return (
        <div className="w-full md:-mt-20 md:px-6 bg-black">
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={16}
                centeredSlides={false}
                navigation
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                slidesPerView={3} // default (mobile)
                breakpoints={{
                    640: { slidesPerView: 4 },
                    1024: { slidesPerView: 7 },
                }}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full p-4 bg-[#232323]  h-[200px] flex flex-col justify-between items-start shadow-md">
                            <span className="font-hubot font-bold text-[20px] text-[#DBFD01]">
                                {index + 1}.
                            </span>
                            <div className="flex justify-end flex-grow flex-col ">
                                <h2 className="text-white font-hubot  font-bold text-[24px]">
                                    {item.price} zł
                                </h2>
                                <p className="text-white text-[14px] font-hubot line-clamp-1 font-medium">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
