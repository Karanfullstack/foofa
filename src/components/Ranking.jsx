import Container from "./Container";
import FrameOne from "../assets/Frame.svg";
import FrameTwo from "../assets/Frame2.svg";
import FramThree from "../assets/Frame3.svg";

const frames = [
    { image: FrameOne },
    { image: FrameTwo, css: "-mt-10" },
    { image: FramThree, css: "mt-5" },
];

export default function Ranking() {
    return (
        <div className="min-h-[90vh] bg-black flex gap-5 pt-20 pb-10 flex-col justify-center items-center w-full font-hubot">
            <Container>
                <div className="flex flex-col gap-12 justify-center items-center px-4 sm:px-0">
                    <h2 className="text-3xl sm:text-5xl font-bold text-white text-center leading-tight">
                        Wygraj niesamowite nagrody
                    </h2>

                    <div className="-mt-4">
                        <button className="bg-[#DBFD01] py-[8px] text-[16px] uppercase leading-[100%] font-bold font-hubot font-semicondensed md:w-[153px] md:h-[48px] h-[40px] w-[140px] min-w-[120px] fill-transparent">
                            pobierz apkę
                        </button>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
                            Ranking miesięczny
                        </h2>
                    </div>

                    <div className="flex justify-center mt-4 w-full gap-x-2 sm:gap-x-4 items-end">
                        {frames.map((frame, index) => (
                            <img
                                key={index}
                                className={`${
                                    frame.css || ""
                                } max-w-[32%] sm:max-w-none h-auto object-contain`}
                                src={frame.image}
                                alt={`Ranking Frame ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}
