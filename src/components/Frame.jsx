import React from "react";
// Re-importing the original assets as requested
import groupFootbal from "../assets/Group.svg";

const Container = ({ children }) => (
    <div className="max-w-[1360px] mx-auto px-4 pt-0 pb-0 sm:px-6 lg:px-8">{children}</div>
);

export default function App() {
    return (
        <div className="bg-black min-h-[90vh]  font-hubot flex flex-col justify-center items-center">
            <Container>
                <div className="w-full p-3">
                    <div className="flex flex-col gap-5 justify-center items-center">
                        <div className="bg-white rounded-full mb-3 w-[80px] h-[80px] flex items-center justify-center overflow-hidden">
                            {/* Using the imported image */}
                            <img
                                src={groupFootbal}
                                alt="football"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div
                            className="w-full max-w-sm text-center py-4 bg-[#DBFD01]
                                        sm:w-[365px] sm:max-w-none"
                        >
                            {/* max-w-sm for mobile, original width for sm+ */}
                            <span
                                className="text-3xl flex items-center justify-center font-bold
                                            sm:text-5xl"
                            >
                                {/* Smaller text for mobile, original for sm+ */}
                                “Wiedziałem!”
                            </span>
                        </div>
                        <div
                            className="w-full max-w-md text-center py-4 bg-white
                                        sm:w-[445px] sm:max-w-none"
                        >
                            {/* max-w-md for mobile, original width for sm+ */}
                            <span
                                className="text-3xl flex items-center justify-center font-bold
                                            sm:text-5xl"
                            >
                                {/* Smaller text for mobile, original for sm+ */}
                                “A nie mówiłem?”
                            </span>
                        </div>
                        <div
                            className="w-full max-w-lg text-center py-4 bg-[#DBFD01]
                                        sm:w-[510px] sm:max-w-none"
                        >
                            {/* max-w-lg for mobile, original width for sm+ */}
                            <span
                                className="text-3xl flex items-center justify-center font-bold
                                            sm:text-5xl"
                            >
                                {/* Smaller text for mobile, original for sm+ */}
                                “To było oczywiste!”
                            </span>
                        </div>
                        <div className="w-full h-[60px] flex justify-center items-center">
                            {/* Reverted px-4 */}
                            <span
                                className="text-2xl text-white font-bold text-center leading-tight
                                            sm:text-5xl"
                            >
                                {/* Smaller text for mobile, original for sm+ */}
                                Apka dla futbolowych Ekspertów.
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
//
