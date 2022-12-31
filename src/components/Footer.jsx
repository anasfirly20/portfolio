import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-[#2D2B2B] font-exo text-[#e1dfde] text-center p-7 space-y-2">
      <p className="font-semibold text-lg">
        All Rights Reserved. Made By Anas Firly
      </p>
      <div className="flex justify-center gap-2 text-2xl">
        <a href="https://www.instagram.com/anasfirly_/" target="break">
          <AiOutlineInstagram />
        </a>
        <a href="https://twitter.com/anasfirly_" target="break">
          <AiOutlineTwitter />
        </a>
        <a href="https://www.linkedin.com/in/anasfirly20/" target="break">
          <AiOutlineLinkedin />
        </a>
        <a href="https://wa.me/79625556174" target="break">
          <AiOutlineWhatsApp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
6;
