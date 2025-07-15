import CardVector from "../assets/Card-Vector.svg";
import screenShot from "../assets/Screenshot-1.svg";

export default function Card() {
    return (
        <div className="w-[437px] relative bg-[#232323] h-[670px]">
            <div
                className="w-[368px] absolute inset-0 bg-cover justify-start p-5 flex flex-col items-start"
                style={{ backgroundImage: `url(${CardVector})` }}
            >
                <div className="flex justify-start items-start">
                    <p className="text-[#F6F6F6] sm:py-3 py-3 font-hubot  leading-tight sm:text-3xl text-2xl font-medium">
                        Zbieraj punkty w
                        <p>
                            predykcjach przed i w<p>trakcie meczu!</p>
                        </p>
                    </p>
                </div>

                <div className="absolute bottom-0 sm:left-14 sm:right-0 right-14 ">
                    <img src={screenShot} alt="screenshot" />
                </div>
            </div>
        </div>
    );
}
