import React from "react";
// Re-importing the original assets as requested
import Tshirt from "../assets/welcome-i.svg";
import Vector from "../assets/FOOVA.svg";
// Importing Link from react-router-dom as per original code
import { Link } from "react-router-dom";

// The Footer component, refactored for clarity and organization
function Footer() {
    return (
        <footer className="w-full bg-[#232323] font-hubot flex justify-end items-end">
            <div className="relative w-full max-w-[1360px] m-auto min-h-[587px] px-4 sm:px-6 md:px-8 py-10 flex flex-col gap-10">
                {/* Background Image Section */}
                <div
                    className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-100 z-0"
                    style={{ backgroundImage: `url(${Vector})` }}
                />

                {/* Top Banner Section */}
                <div className="w-full max-w-[480px] h-[65px] bg-[#343434] flex justify-between items-center z-10  overflow-hidden shadow-lg">
                    {/* Base text size (text-[16px]) is for small devices */}
                    <p className="text-[#1A1A1A] font-hubot px-2 bg-[#DBFD01] h-full flex items-center justify-center font-bold text-[16px] sm:text-[20px] md:text-[28px] ">
                        W 1 dzień
                    </p>
                    {/* Base text size (text-[15px]) is for small devices */}
                    <p className="text-white font-hubot text-[15px] sm:text-[18px] md:text-[20px] pr-6 sm:pr-6 h-full flex items-center">
                        Wdrożenie na Twoich kanałach!
                    </p>
                </div>

                {/* Heading and Image Section */}
                <div className="w-full flex flex-col md:flex-row justify-between items-center z-10 gap-6">
                    {/* Base text size (text-[36px]) and text alignment (text-center) are for small devices */}
                    <div className="font-hubot text-white text-[6vw] sm:text-[48px] md:text-[64px] font-bold leading-tight text-center md:text-left">
                        <p>Chcesz zostać</p>
                        <p>Partnerem Foova FC?</p>
                    </div>
                    <img
                        src={Tshirt}
                        alt="tshirt"
                        // Image width (max-w-[300px]) is for small devices, scaling up with sm: and md:
                        className="max-w-[300px] sm:max-w-[200] md:max-w-[250px] w-full h-auto"
                    />
                </div>

                {/* Contact Information Section */}
                <div className="z-10">
                    {/* Base text size (text-[18px]) is for small devices */}
                    <p className="text-white font-hubot text-[18px] sm:text-[20px] font-medium mb-1">
                        Napisz do nas:
                    </p>
                    {/* Base text size (text-[30px]) is for small devices */}
                    <p className="relative inline-block font-hubot text-white text-[30px] sm:text-[48px] md:text-[64px] font-bold">
                        <a
                            href="mailto:partners@foova.org"
                            // Adding a subtle hover effect for better UX
                            className="bg-[linear-gradient(to_top,_white_3px,_transparent_3px)] bg-no-repeat bg-[length:100%_3px] bg-bottom hover:bg-[length:0%_3px] transition-all duration-300"
                        >
                            partners@foova.org
                        </a>
                    </p>
                </div>

                {/* Bottom Navigation and Copyright Section */}
                <div className="w-full z-10 py-4 border-t border-gray-600 text-[#D1D1D1] font-hubot flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 text-[14px] sm:text-[16px]">
                    <p>© FOOVA 2025</p>
                    {/* Base flex direction (flex-col) and gap (gap-3) are for small devices */}
                    <nav className="flex flex-col sm:flex-row items-center gap-3">
                        <Link to="polityka-prytwatności" className="hover:underline">
                            Polityka Prytwatności
                        </Link>
                        <Link to="regulamin" className="hover:underline">
                            Regulamin
                        </Link>
                        <Link to="/informacje-Usunięciu-konta" className="hover:underline">
                            Informacje o Usunięciu konta
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
