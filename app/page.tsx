import Navbar from "./components/navbar";
import Footer from "./components/footer"
import LandingPage from "./pages/lanadingPage/page";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <LandingPage/>
      <main className="flex-grow">
        <h1>Welcome to the Home Page</h1>
      </main>
      <Footer/>
    </div>
  );
}
