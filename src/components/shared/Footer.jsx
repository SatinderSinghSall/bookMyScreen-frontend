import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";

import mainLogo from "../../assets/main-icon-white.png";
import DeveloperCredit from "../DeveloperCredit";

const Footer = () => {
  const socialIcons = [
    {
      icon: FaFacebookF,
      label: "Facebook",
    },
    {
      icon: FaTwitter,
      label: "Twitter",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
    },
    {
      icon: FaYoutube,
      label: "YouTube",
    },
    {
      icon: FaPinterestP,
      label: "Pinterest",
    },
    {
      icon: FaLinkedinIn,
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="w-full bg-[#2b2b2b] text-gray-400">
      <DeveloperCredit />

      {/* =====================================================
          TOP BORDER
      ===================================================== */}
      <div className="w-full border-t border-[#444]" />

      {/* =====================================================
          FOOTER CONTENT
      ===================================================== */}
      <div
        className="
          max-w-[1320px]
          mx-auto

          px-4
          md:px-8
          lg:px-0

          py-[30px]
          md:py-[34px]

          flex
          flex-col
          items-center
        "
      >
        {/* ===================================================
            LOGO
        =================================================== */}
        <div className="mb-[22px]">
          <img
            src={mainLogo}
            alt="BookMyScreen"
            className="
              w-[118px]
              md:w-[125px]

              h-auto

              object-contain

              opacity-95
            "
          />
        </div>

        {/* ===================================================
            SOCIAL ICONS
        =================================================== */}
        <div
          className="
            flex
            items-center
            justify-center

            gap-[14px]

            mb-[24px]
          "
        >
          {socialIcons.map((social) => {
            const Icon = social.icon;

            return (
              <button
                key={social.label}
                type="button"
                aria-label={social.label}
                className="
                  w-[36px]
                  h-[36px]

                  rounded-full

                  bg-[#3d3d3d]

                  flex
                  items-center
                  justify-center

                  text-white

                  text-[15px]

                  hover:bg-[#f84464]

                  hover:-translate-y-[1px]

                  transition-all
                  duration-200
                "
              >
                <Icon />
              </button>
            );
          })}
        </div>

        {/* ===================================================
            COPYRIGHT
        =================================================== */}
        <p
          className="
            text-center

            text-[12px]
            md:text-[13px]

            leading-[20px]

            text-[#9b9b9b]

            mb-[12px]
          "
        >
          Copyright 2025 © bookMyScreen Pvt Ltd. Ltd. All Rights Reserved.
        </p>

        {/* ===================================================
            DISCLAIMER
        =================================================== */}
        <p
          className="
            max-w-[1150px]

            mx-auto

            text-center

            text-[10px]
            md:text-[11px]

            leading-[17px]

            text-[#888]
          "
        >
          The content and images used on this site are copyright protected and
          copyrights vest with the respective owners. The usage of the content
          and images on this website is intended to promote the works and no
          endorsement of the artist shall be implied.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
