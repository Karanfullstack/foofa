import Container from "./Container";
import HeroVector from "../assets/bg-vector.svg";
import tshirt from "../assets/jersey_home.svg";
import appicon from "../assets/App-Icon.svg";
export default function Hero() {
    return (
        <div className="bg-black font-hubot ">
            <Container>
                <div className="relative h-[80vh]   flex-col flex justify-center items-center w-full">
                    {/* Background Image */}
                    <div
                        className="absolute w-full sm:top-2  inset-0  bg-no-repeat  bg-contain bg-top "
                        style={{ backgroundImage: `url(${HeroVector})` }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/75" />

                    {/* Foreground Content */}
                    <div className="relative sm:-mt-6 -mt-20 justify-center space-y-5 items-center z-10 text-white p-6">
                        <div className="flex flex-col font-hubot -mt-4 gap-6 justify-center items-center">
                            <img src={tshirt} alt="jersey" />
                            <span className="text-xl">Nie ma farta. Jest tylko wiedza!</span>
                        </div>
                        <h1 className="text-[40px] sm:text-[65px] font-hubot   leading-tight text-center font-bold">
                            Udowodnij, że wiesz więcej
                            <h1>niż reszta i zgarnij nagrody!</h1>
                        </h1>
                    </div>

                    <div className="absolute w-fit bottom-0 py-[8px] px-2 flex gap-2 justify-between items-center  bg-[#232323]  h-[64px]">
                        <img src={appicon} alt="appicon" />
                        <span className="text-white px-1 font-hubot sm:text-[1rem] text-[0.8rem]">
                            Pobierz apkę FOOVA FC i pokaż kto tu rządzi.
                        </span>
                    </div>
                </div>
            </Container>
        </div>
    );
}
