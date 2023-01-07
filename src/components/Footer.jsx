import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
  AiOutlineGithub,
} from "react-icons/ai";
import { SlSocialVkontakte } from "react-icons/sl";

// Footer icons
const iconsFooter = [
  {
    icon: <AiOutlineLinkedin />,
    href: "https://www.linkedin.com/in/anasfirly20/",
  },
  {
    icon: <AiOutlineInstagram />,
    href: "https://www.instagram.com/anasfirly_/",
  },
  {
    icon: <AiOutlineTwitter />,
    href: "https://twitter.com/anasfirly_",
  },
  {
    icon: <AiOutlineGithub />,
    href: "https://github.com/anasfirly20",
  },
  {
    icon: <SlSocialVkontakte />,
    href: "https://vk.com/anasfirly20",
  },
  {
    icon: <AiOutlineWhatsApp />,
    href: "https://wa.me/79625556174",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#2D2B2B] font-exo text-[#e1dfde] text-center py-[3vh] px-[6vw] lg:px-[10vw] space-y-3">
      <div className="text-sm md:flex justify-center gap-1">
        <p className>Copyright © 2022 FaoTech™ – Anas Firly.</p>
        <p className="">All Rights Reserved.</p>
      </div>
      <div className="flex justify-center gap-4 text-2xl">
        {iconsFooter.map(({ icon, href }, index) => (
          <a key={index} href={href} target="break">
            {icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
6;
