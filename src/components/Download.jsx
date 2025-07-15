import SZEF from "../assets/Layer_1.svg";
import DownloadsIcon from "../assets/Stores.svg";
import LeftTopIcon from "../assets/stadion.svg";
import Cup from "../assets/puchar.svg";
import Glasses from "../assets/okularki.svg";
import FootBall from "../assets/pilka.svg";

export default function Download() {
    return (
        <section
            aria-labelledby="download-heading"
            className="min-h-[90vh] w-full flex font-hubot justify-center items-center bg-black overflow-hidden py-10"
        >
            <article className="relative flex h-full w-full flex-col items-center justify-center gap-5 px-4 text-center">
                <figure className="max-w-[200px] sm:max-w-[30px] md:max-w-[30px] lg:max-w-80 w-full h-auto">
                    <img
                        src={SZEF}
                        alt="Postać Szefa aplikacji"
                        className="w-full h-auto object-contain"
                    />
                </figure>

                <h2
                    id="download-heading"
                    className="text-2xl sm:text-5xl md:text-[64px] font-hubot font-bold text-white leading-tight"
                >
                    Dawaj do gry!
                </h2>

                <p className="text-lg sm:text-xl md:text-[20px] font-medium text-white font-hubot">
                    Pobierz aplikację:
                </p>

                <figure className="max-w-[300px] sm:max-w-[250px] md:max-w-[300px] w-full h-auto">
                    <img
                        src={DownloadsIcon}
                        alt="Ikony sklepów App Store i Google Play"
                        className="w-full h-auto object-contain"
                    />
                </figure>

                <img
                    className="absolute
                                -top-10 left-2 w-16 h-auto object-contain
                                sm:top-8 sm:left-8 sm:w-16
                                md:-top-16 md:left-56 md:w-28"
                    src={LeftTopIcon}
                    alt=""
                    aria-hidden="true"
                />

                <img
                    className="absolute
                                bottom-30 left-2 w-16 h-auto object-contain
                                sm:bottom-8 sm:left-8 sm:w-16
                                md:bottom-32 md:left-12 md:w-28"
                    src={FootBall}
                    alt=""
                    aria-hidden="true"
                />

                <img
                    className="absolute
                                top-2 right-2 w-16 h-auto object-contain
                                sm:top-8 sm:right-8 sm:w-20
                                md:-top-0 md:right-56 md:w-28" // Original size on md and up
                    src={Cup}
                    alt=""
                    aria-hidden="true"
                />

                <img
                    className="absolute
                                top-200 right-4 w-16 h-auto object-contain
                                sm:top-50 sm:right-8 sm:w-16
                                md:top-[20.25rem] md:right-14 md:w-28"
                    src={Glasses}
                    alt=""
                    aria-hidden="true"
                />
            </article>
        </section>
    );
}
