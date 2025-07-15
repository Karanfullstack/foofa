export default function RankingTwo() {
    return (
        <section className="min-h-[600px] pt-20 pb-10 flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-8 bg-black">
            <div className="flex flex-col sm:flex-row justify-between gap-y-8 sm:gap-x-4 p-0 sm:p-5 w-full max-w-screen-xl">
                <div className="flex flex-col items-start gap-3 w-full">
                    <h2 className="text-[28px] font-bold text-white text-center sm:text-left w-full">
                        Ranking kolejki
                    </h2>

                    <div className="w-full text-white font-hubot flex items-center justify-between px-4 py-3 bg-[#232323] ">
                        <div className="text-lg flex items-center gap-2">
                            <span className="text-xl font-bold text-[#DBFD01]">1. </span>

                            <span className="text-[14px] font-normal text-left">
                                Bon do wykorzystania w Media Expert
                            </span>
                        </div>

                        <span className="text-[18px] sm:text-[24px] font-bold">500 zł</span>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-3 w-full">
                    <h2 className="text-[28px] font-bold text-white text-center sm:text-left w-full">
                        Ranking klubowy (miesięczny)
                    </h2>

                    <div className="w-full text-white font-hubot flex items-center justify-between px-4 py-3 bg-[#232323] ">
                        <div className="text-lg flex items-center gap-2">
                            <span className="text-xl font-bold text-[#DBFD01]">1. </span>
                            <span className="text-[14px] font-normal text-left">
                                Bon do wykorzystania w Media Expert + Wkład Klubu/Ligi
                            </span>
                        </div>
                        <span className="text-[18px] sm:text-[24px] font-bold">500 zł</span>
                    </div>
                    <div className="w-full text-white font-hubot flex items-center justify-between px-4 py-3 bg-[#232323] ">
                        <div className="text-lg flex items-center gap-2">
                            <span className="text-xl font-bold text-[#DBFD01]">2. </span>
                            <span className="text-[14px] font-normal text-left">
                                Bon do wykorzystania w Media Expert + Wkład Klubu/Ligi
                            </span>
                        </div>
                        <span className="text-[18px] sm:text-[24px] font-bold">500 zł</span>
                    </div>

                    <div className="w-full text-white font-hubot flex items-center justify-between px-4 py-3 bg-[#232323] ">
                        <div className="text-lg flex items-center gap-2">
                            <span className="text-xl font-bold text-[#DBFD01]">3. </span>
                            <span className="text-[14px] font-normal text-left">
                                Bon do wykorzystania w Media Expert + Wkład Klubu/Ligi
                            </span>
                        </div>
                        <span className="text-[18px] sm:text-[24px] font-bold">500 zł</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
