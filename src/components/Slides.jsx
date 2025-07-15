import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Container from "./Container";
import arrow from "../assets/chevron-left.svg";
import Card from "./Card";

export default function Slides() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [activeBtn, setActiveBtn] = useState("left");

    return (
        <div className="w-full font-hubot font-[800] px-5 bg-black pt-4 min-h-screen sm:h-screen">
            <Container size="1250px">
                <div className="h-[760px] w-full">
                    {/* Header with Arrows */}
                    <div className="h-[48px] flex justify-between items-center px-8">
                        <span className="text-white text-lg font-normal">
                            Predykcje, ciekawostki i Wy, Eksperci:
                        </span>

                        {/* Custom arrow buttons */}
                        <div className="w-[92px] flex items-center justify-between h-[48px]">
                            <button
                                onClick={() => setActiveBtn("left")}
                                ref={prevRef}
                                className={` ${
                                    activeBtn === "left"
                                        ? "bg-[#DBFD01] cursor-pointer"
                                        : "bg-[#232323] "
                                } w-1/2 font-bold flex items-center justify-center h-full`}
                            >
                                <img src={arrow} alt="leftArrow" />
                            </button>
                            <button
                                onClick={() => setActiveBtn("right")}
                                ref={nextRef}
                                className={` ${
                                    activeBtn === "right"
                                        ? "bg-[#DBFD01] cursor-pointer"
                                        : "bg-[#232323] "
                                } w-1/2 font-bold flex items-center justify-center h-full`}
                            >
                                <img className="rotate-180" src={arrow} alt="rightArrow" />
                            </button>
                        </div>
                    </div>

                    {/* Swiper section */}
                    <section className="mt-10 px-4">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={100}
                            slidesPerView={1}
                            breakpoints={{
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            onInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }}
                        >
                            <SwiperSlide>
                                <Card />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card />
                            </SwiperSlide>
                        </Swiper>
                    </section>
                </div>
            </Container>
        </div>
    );
}
// ..
