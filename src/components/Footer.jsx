import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
  AiOutlineGithub,
} from "react-icons/ai";

import { SlSocialVkontakte } from "react-icons/sl";

const Footer = () => {
  return (
    <footer className="bg-[#2D2B2B] font-exo text-[#e1dfde] text-center p-6 space-y-3">
      <div className="text-md space-y-1">
        <p className>© 2023 FaoTech™. All Rights Reserved.</p>
        <p className="">Made By Anas Firly</p>
      </div>
      <div className="flex justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/anasfirly20/" target="break">
          <AiOutlineLinkedin />
        </a>
        <a href="https://www.instagram.com/anasfirly_/" target="break">
          <AiOutlineInstagram />
        </a>
        <a href="https://twitter.com/anasfirly_" target="break">
          <AiOutlineTwitter />
        </a>
        <a href="https://github.com/anasfirly20" target="break">
          <AiOutlineGithub />
        </a>
        <a href="https://vk.com/anasfirly20" target="break">
          <SlSocialVkontakte />
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
