import Navbar from "./components/navbar";
import Footer from "./components/footer"
import LandingPage from "./pages/lanadingPage/page";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <LandingPage/>
      <div className="bg-white h-20"></div>
      <Footer/>
    </div>
  );
}
