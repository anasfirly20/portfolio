import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full p-2 font-exo text-[#2D2B2B]"
    >
      <motion.div
        className="my-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          temporibus totam ullam eligendi molestias libero possimus enim
          delectus inventore sint.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
