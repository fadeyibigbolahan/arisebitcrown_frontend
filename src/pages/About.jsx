import React from "react";
import brainwaveSymbol from "../assets/brainwave-symbol.svg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen pb-4">
      <div className="container pt-3 text-center">
        <img
          src={brainwaveSymbol}
          alt="Brainwave Symbol"
          className="mx-auto my-2"
        />
        <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 text-center">
          Welcome to Arise Bit Crown (ABC), a leading investment platform
          dedicated to empowering investors and enhancing wealth. Our mission is
          to provide a secure, transparent, and efficient investment experience.
        </p>
        <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 text-center">
          At ABC, we offer competitive returns and a diversified investment
          portfolio, helping you unlock your financial potential and achieve a
          life of financial freedom.
        </p>
        <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 text-center">
          Our platform is designed to be accessible and understandable for
          everyone, with a focus on security and ease of use.
        </p>
        <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 text-center">
          We believe in providing comprehensive investment opportunities, expert
          support, and unparalleled service to help you achieve your financial
          goals.
        </p>
        <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 text-center">
          ABC is fully licensed and registered, ensuring a regulated environment
          for investors. Enjoy daily rewards, expert guidance, and a
          user-friendly interface to manage your investments.
        </p>
        <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 text-center">
          Join our community forum to connect with fellow investors and industry
          experts, share insights, and discuss market trends.
        </p>
      </div>
      <Link
        to="/"
        className="hover:bg-white hover:text-black px-2 py-1 border-white border-2 rounded-full"
      >
        Go back
      </Link>
    </div>
  );
};

export default About;
