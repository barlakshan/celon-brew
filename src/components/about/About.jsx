import React from "react";
import Bg from "../../assets/bg/Bg.png";
import Lottie from "lottie-react";
import coffee from "../../assets/bg/coffeeanima.json"; // Ensure the correct path
import { motion } from "framer-motion";

// Styling for the background image
const bgImage = {
  backgroundImage: `url(${Bg})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const About = () => {
  return (
    <div id="about" className="md:py-20 py-40" style={bgImage}>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="text-amber-900 font-pacifico text-5xl text-center"
      >
        About Us
      </motion.h1>
      <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto">
        {/* image section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <Lottie animationData={coffee} className="md:w-[600px]" />
        </motion.div>
        {/* text section */}
        <div className="space-y-4 px-4 md:px-0">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-2xl font-sriracha text-amber-900"
          >
            Ceylon Brew – A Taste of Authentic Sri Lankan Coffee
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="font-poppins"
          >
            Founded in 2015, Ceylon Brew began as a humble coffee stall in the
            bustling streets of Colombo. Our founder, Cheff. Pabilis Silva,
            envisioned a space where tradition and craftsmanship come together
            to celebrate the rich heritage of Sri Lankan coffee. At Ceylon Brew,
            we believe that every cup tells a story. <br /><br/>
            Sourced from the lush highlands of Sri Lanka, our beans are
            carefully handpicked from sustainable farms, ensuring quality and
            authenticity in every sip. Our expert roasters bring out the unique flavors of Ceylon coffee,
            balancing bold aromas with smooth, rich textures. <br /><br/> From farm to cup,
            we are committed to honoring time-honored techniques while embracing
            modern innovations to craft the perfect brew. Whether you enjoy a
            classic black coffee, a velvety latte, or a unique spiced infusion,
            Ceylon Brew is here to bring you the true essence of Sri Lankan
            coffee culture.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-2xl font-pacifico text-amber-900"
          >
            ☕ Ceylon Brew – Experience Authenticity in Every Sip
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default About;
