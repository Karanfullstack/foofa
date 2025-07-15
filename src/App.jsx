import Download from "./components/Download";
import Footer from "./components/Footer";
import Frame from "./components/Frame";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Regulations from "./components/Regulations";
import Ranking from "./components/Ranking";
import RankingTwo from "./components/RankingTwo";
import Slides from "./components/Slides";
import SmallCards from "./components/SmallCards";

function App() {
    return (
        <div className="w-full h-full ">
            <Navbar />
            <Hero />
            <Frame />
            <Slides />
            <Ranking />
            <SmallCards />
            <RankingTwo />
            <Download />
            <Footer />
        </div>
    );
}

export default App;
