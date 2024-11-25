import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#2f4f4f]">
      {/* 메인 콘텐츠 */}
      <main className="flex flex-col items-center justify-center flex-grow">
        <h1 className="textShadow-glow text-8xl font-bold text-[#d6d9dc] mb-6">
          🤔MBTI TEST🤔
        </h1>
        <Link
          to="/loginpage"
          className="text-blue-500 text-5xl font-bold animation-colorBlink hover:text-red-500"
        >
          START
        </Link>
        <p className="text-[#d6d9dc] m-3 text-xs">start click!</p>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
