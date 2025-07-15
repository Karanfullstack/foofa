import logo from "../assets/Vector.svg";
export default function Navbar() {
    return (
        <header>
            <nav className="w-full font-hubot h-[88px] flex items-center justify-between px-5  bg-black">
                <div className="flex items-center w-[180px] h-[40px]  md:w-[218.61px] md:h-[48px] px-2 ">
                    <img src={logo} alt="logo" />
                </div>
                <div>
                    <button className="bg-[#DBFD01] py-[8px]  text-[16px] uppercase leading-[100%] font-bold font-hubot font-semicondensed md:w-[153px] md:h-[48px] h-[40px] w-[140px]  min-w-[120px] fill-transparent">
                        pobierz apkę
                    </button>
                </div>
            </nav>
        </header>
    );
}
