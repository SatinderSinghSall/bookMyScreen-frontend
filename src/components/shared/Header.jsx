import React, { useState } from "react";
import { FaSearch, FaChevronDown, FaBars } from "react-icons/fa";

import mainLogo from "../../assets/main-icon.png";

import MenuDrawer from "../MenuDrawer";
import LocationModal from "../LocationModal";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);

  const [location, setLocation] = useState("Bhubaneswar");

  return (
    <>
      <header className="w-full bg-white text-sm">
        {/* =====================================================
            TOP HEADER
        ===================================================== */}
        <div className="bg-white">
          <div className="max-w-[1320px] mx-auto px-4 lg:px-0">
            <div className="h-[68px] flex items-center justify-between">
              {/* =================================================
                  LEFT - LOGO + SEARCH
              ================================================= */}
              <div className="flex items-center">
                {/* LOGO */}
                <img
                  src={mainLogo}
                  alt="bookMyScreen"
                  className="
                    w-[120px]

                    h-auto

                    object-contain

                    cursor-pointer
                  "
                />

                {/* SEARCH */}
                <div
                  className="
                    relative

                    ml-[24px]

                    hidden
                    md:block
                  "
                >
                  <input
                    type="text"
                    placeholder="Search for Movies, Events, Plays, Sports, Activities & more..."
                    className="
                      w-[420px]
                      lg:w-[590px]

                      h-[40px]

                      border
                      border-[#dedede]

                      rounded-[4px]

                      pl-[42px]
                      pr-[15px]

                      text-[14px]

                      text-[#333]

                      placeholder:text-[#777]

                      outline-none

                      focus:border-[#bdbdbd]
                    "
                  />

                  <FaSearch
                    className="
                      absolute

                      left-[14px]

                      top-1/2

                      -translate-y-1/2

                      text-[#555]

                      text-[15px]

                      pointer-events-none
                    "
                  />
                </div>
              </div>

              {/* =================================================
                  RIGHT - LOCATION / SIGN IN / MENU
              ================================================= */}
              <div className="flex items-center">
                {/* LOCATION */}
                <button
                  type="button"
                  onClick={() => setLocationOpen(true)}
                  className="
                    flex
                    items-center

                    gap-[7px]

                    text-[14px]

                    font-medium

                    text-[#222]

                    hover:text-[#f84464]

                    transition

                    cursor-pointer
                  "
                >
                  <span>{location}</span>

                  <FaChevronDown
                    className="
                      text-[9px]
                    "
                  />
                </button>

                {/* SIGN IN */}
                <button
                  type="button"
                  className="
                    ml-[24px]

                    h-[32px]

                    min-w-[72px]

                    px-[15px]

                    bg-[#f84464]

                    hover:bg-[#e93657]

                    text-white

                    rounded-[4px]

                    text-[12px]

                    font-semibold

                    flex
                    items-center
                    justify-center

                    transition

                    cursor-pointer
                  "
                >
                  Sign in
                </button>

                {/* HAMBURGER */}
                <button
                  type="button"
                  aria-label="Open menu"
                  onClick={() => setMenuOpen(true)}
                  className="
                    ml-[25px]

                    w-[28px]
                    h-[32px]

                    flex
                    items-center
                    justify-center

                    text-[#333]

                    hover:text-[#f84464]

                    transition

                    cursor-pointer
                  "
                >
                  <FaBars className="text-[22px]" />
                </button>
              </div>
            </div>

            {/* =================================================
                MOBILE SEARCH
            ================================================= */}
            <div className="md:hidden pb-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for Movies, Events, Plays & more..."
                  className="
                    w-full

                    h-[40px]

                    border
                    border-gray-300

                    rounded-[4px]

                    pl-[40px]
                    pr-4

                    text-[14px]

                    outline-none
                  "
                />

                <FaSearch
                  className="
                    absolute

                    left-[14px]

                    top-1/2

                    -translate-y-1/2

                    text-gray-500

                    text-[15px]
                  "
                />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM NAVBAR
        ===================================================== */}
        <nav
          className="
            bg-[#f5f5f5]

            border-t
            border-b
            border-[#e5e5e5]
          "
        >
          <div
            className="
              max-w-[1320px]

              mx-auto

              px-4
              lg:px-0
            "
          >
            <div
              className="
                h-[42px]

                flex

                items-center

                justify-between
              "
            >
              {/* LEFT */}
              <div
                className="
                  flex
                  items-center

                  gap-[27px]

                  text-[14px]

                  font-medium

                  text-[#222]
                "
              >
                <span className="nav-item">Movies</span>

                <span className="nav-item">Stream</span>

                <span className="nav-item">Events</span>

                <span className="nav-item">Plays</span>

                <span className="nav-item">Sports</span>

                <span className="nav-item">Activities</span>
              </div>

              {/* RIGHT */}
              <div
                className="
                  hidden
                  md:flex

                  items-center

                  gap-[27px]

                  text-[13px]

                  text-[#333]
                "
              >
                <span className="nav-item">ListYourShow</span>

                <span className="nav-item">Corporates</span>

                <span className="nav-item">Offers</span>

                <span className="nav-item">Gift Cards</span>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* =======================================================
          MENU DRAWER
      ======================================================= */}
      <MenuDrawer isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* =======================================================
          LOCATION MODAL
      ======================================================= */}
      <LocationModal
        isOpen={locationOpen}
        onClose={() => setLocationOpen(false)}
        onSelectLocation={(selectedLocation) => {
          setLocation(selectedLocation);
        }}
      />

      {/* =======================================================
          SMALL NAV STYLE
      ======================================================= */}
      <style>
        {`
          .nav-item {
            cursor: pointer;
            transition: color 0.2s ease;
          }

          .nav-item:hover {
            color: #f84464;
          }
        `}
      </style>
    </>
  );
};

export default Header;
