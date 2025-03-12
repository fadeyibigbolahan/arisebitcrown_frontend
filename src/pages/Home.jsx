import Header from "../components/Header";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Footer />
      </div>
    </>
  );
};

export default Home;
