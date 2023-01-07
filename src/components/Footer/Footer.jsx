import { FooterItems } from "./FooterItems";

const Footer = () => {
  return (
    <footer className="space-y-3 bg-[#2D2B2B] py-[3vh] px-[6vw] text-center font-exo text-[#e1dfde] lg:px-[10vw]">
      <div className="justify-center gap-1 text-sm md:flex">
        <p className>Copyright © 2022 FaoTech™ – Anas Firly.</p>
        <p className="">All Rights Reserved.</p>
      </div>
      <div className="flex justify-center gap-4 text-2xl">
        {FooterItems.map(({ icon, href }, index) => (
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
