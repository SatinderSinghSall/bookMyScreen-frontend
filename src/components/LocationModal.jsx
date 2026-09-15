import React, { useMemo, useState } from "react";
import { FiSearch, FiCrosshair, FiChevronRight } from "react-icons/fi";

const cities = [
  {
    name: "Mumbai",
    type: "mumbai",
  },
  {
    name: "Delhi-NCR",
    type: "delhi",
  },
  {
    name: "Bengaluru",
    type: "bengaluru",
  },
  {
    name: "Hyderabad",
    type: "hyderabad",
  },
  {
    name: "Chandigarh",
    type: "chandigarh",
  },
  {
    name: "Ahmedabad",
    type: "ahmedabad",
  },
  {
    name: "Pune",
    type: "pune",
  },
  {
    name: "Chennai",
    type: "chennai",
  },
  {
    name: "Kolkata",
    type: "kolkata",
  },
  {
    name: "Kochi",
    type: "kochi",
  },
];

/* ============================================================
   CITY ICON

   These are deliberately simple line-art icons so they look
   much closer to the BookMyShow city illustrations than the
   filled FontAwesome icons.
============================================================ */
const CityIcon = ({ type }) => {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (type) {
    case "mumbai":
      return (
        <svg width="58" height="52" viewBox="0 0 58 52" {...common}>
          <path d="M7 48h44" />
          <path d="M10 48V25h38v23" />
          <path d="M7 25l5-6h34l5 6" />
          <path d="M15 19V11h6v8" />
          <path d="M37 19V11h6v8" />
          <path d="M19 11l10-7 10 7" />
          <path d="M22 25v23" />
          <path d="M29 25v23" />
          <path d="M36 25v23" />
          <path d="M10 31h38" />
          <path d="M15 35h3M40 35h3M15 41h3M40 41h3" />
        </svg>
      );

    case "delhi":
      return (
        <svg width="58" height="52" viewBox="0 0 58 52" {...common}>
          <path d="M8 48h42" />
          <path d="M13 48V28h32v20" />
          <path d="M10 28l19-17 19 17" />
          <path d="M17 21l12-10 12 10" />
          <path d="M20 48V31h18v17" />
          <path d="M25 31v17M33 31v17" />
          <path d="M23 11h12" />
          <path d="M26 7h6" />
        </svg>
      );

    case "bengaluru":
      return (
        <svg width="58" height="52" viewBox="0 0 58 52" {...common}>
          <path d="M7 48h44" />
          <path d="M11 48V30h36v18" />
          <path d="M15 30V21h28v9" />
          <path d="M20 21v-7h18v7" />
          <path d="M25 14V7h8v7" />
          <path d="M27 7V3h4v4" />
          <path d="M18 30v18M29 30v18M40 30v18" />
          <path d="M15 36h28M15 42h28" />
        </svg>
      );

    case "hyderabad":
      return (
        <svg width="58" height="52" viewBox="0 0 58 52" {...common}>
          <path d="M7 48h44" />
          <path d="M11 48V30h36v18" />
          <path d="M17 30V18h7v12" />
          <path d="M34 30V18h7v12" />
          <path d="M20 18V8h5v10M33 18V8h5v10" />
          <path d="M22 8l1-5 1 5M35 8l1-5 1 5" />
          <path d="M27 48V29h4v19" />
          <path d="M14 36h30M14 42h30" />
        </svg>
      );

    case "chandigarh":
      return (
        <svg width="58" height="52" viewBox="0 0 58 52" {...common}>
          <path d="M7 48h44" />
          <path d="M12 48V31h34v17" />
          <path d="M17 31V21h24v10" />
          <path d="M21 21V9h16v12" />
          <path d="M25 9V4h8v5" />
          <path d="M29 4V1" />
          <path d="M17 36h24M17 42h24" />
          <path d="M25 31v17M33 31v17" />
        </svg>
      );

    case "ahmedabad":
      return (
        <svg width="58" height="52" viewBox="0 0 58 52" {...common}>
          <path d="M7 48h44" />
          <path d="M12 48V27h34v21" />
          <path d="M17 27V17h24v10" />
          <path d="M20 17V10h5v7M33 17V10h5v7" />
          <path d="M22 10l2-5 2 5M32 10l2-5 2 5" />
          <path d="M27 48V27h4v21" />
          <path d="M12 35h34M12 42h34" />
        </svg>
      );

    case "pune":
      return (
        <svg width="58" height="52" viewBox="0 0 58 52" {...common}>
          <path d="M7 48h44" />
          <path d="M11 48V27h36v21" />
          <path d="M16 27V19h26v8" />
          <path d="M21 19V11h16v8" />
          <path d="M25 11V5h8v6" />
          <path d="M29 5V1" />
          <path d="M18 34h22M18 41h22" />
          <path d="M25 27v21M33 27v21" />
        </svg>
      );

    case "chennai":
      return (
        <svg width="58" height="52" viewBox="0 0 58 52" {...common}>
          <path d="M7 48h44" />
          <path d="M12 48V29h34v19" />
          <path d="M16 29V18h26v11" />
          <path d="M20 18V10h18v8" />
          <path d="M24 10V4h10v6" />
          <path d="M27 4V1h4v3" />
          <path d="M20 34h18M20 40h18" />
          <path d="M25 29v19M33 29v19" />
        </svg>
      );

    case "kolkata":
      return (
        <svg width="58" height="52" viewBox="0 0 58 52" {...common}>
          <path d="M7 48h44" />
          <path d="M11 48V28h36v20" />
          <path d="M15 28V19h28v9" />
          <path d="M20 19V10h18v9" />
          <path d="M24 10V5h10v5" />
          <path d="M29 5V1" />
          <path d="M17 35h24M17 42h24" />
          <path d="M23 28v20M35 28v20" />
        </svg>
      );

    case "kochi":
      return (
        <svg width="58" height="52" viewBox="0 0 58 52" {...common}>
          <path d="M6 48h46" />
          <path d="M10 48c2-7 8-11 19-11s17 4 19 11" />
          <path d="M15 37c0-9 4-15 7-20M43 37c0-9-4-15-7-20" />
          <path d="M13 16c4-5 8-7 11-7M45 16c-4-5-8-7-11-7" />
          <path d="M29 37V17" />
          <path d="M25 17h8" />
          <path d="M21 37c2-4 4-6 8-6M37 37c-2-4-4-6-8-6" />
        </svg>
      );

    default:
      return null;
  }
};

const LocationModal = ({ isOpen, onClose, onSelectLocation }) => {
  const [search, setSearch] = useState("");

  if (!isOpen) return null;

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(search.toLowerCase()),
  );

  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      return;
    }

    navigator.geolocation.getCurrentPosition(
      () => {
        // You can connect your reverse-geocoding API here.
        // For now we simply close the modal.
        onClose();
      },
      () => {
        // Permission denied / unavailable
        console.log("Unable to detect location.");
      },
    );
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-[110]

        bg-[rgba(0,0,0,0.65)]

        flex
        justify-center
        items-start

        pt-[66px]

        px-[15px]
      "
      onClick={onClose}
    >
      {/* ========================================================
          MODAL
      ======================================================== */}
      <div
        className="
          relative

          w-full
          max-w-[1030px]

          h-[326px]

          bg-white

          rounded-[5px]

          overflow-hidden

          shadow-[0_4px_20px_rgba(0,0,0,0.20)]
        "
        onClick={(event) => event.stopPropagation()}
      >
        {/* ======================================================
            SEARCH CONTAINER
        ====================================================== */}
        <div className="px-[17px] pt-[16px]">
          <div className="relative">
            <input
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search for your city"
              className="
                w-full

                h-[49px]

                bg-white

                border
                border-[#dedede]

                rounded-[4px]

                pl-[50px]
                pr-[15px]

                text-[14px]

                text-[#333]

                placeholder:text-[#555]

                outline-none

                focus:border-[#c9c9c9]
              "
            />

            <FiSearch
              size={20}
              className="
                absolute

                left-[15px]

                top-1/2

                -translate-y-1/2

                text-[#555]

                pointer-events-none
              "
            />
          </div>
        </div>

        {/* ======================================================
            DETECT LOCATION
        ====================================================== */}
        <button
          type="button"
          onClick={handleDetectLocation}
          className="
            w-full

            h-[44px]

            px-[18px]

            flex
            items-center

            gap-[11px]

            text-left

            text-[#f84464]

            text-[14px]

            font-normal

            hover:bg-[#fff8f9]

            transition
          "
        >
          <FiCrosshair size={17} strokeWidth={1.6} />

          <span>Detect my location</span>
        </button>

        {/* ======================================================
            DIVIDER
        ====================================================== */}
        <div
          className="
            h-[1px]

            bg-[#dedede]

            w-full
          "
        />

        {/* ======================================================
            POPULAR CITIES
        ====================================================== */}
        <div
          className="
            px-[27px]

            pt-[14px]
          "
        >
          {/* TITLE */}
          <div
            className="
              text-center

              text-[16px]

              leading-[20px]

              font-normal

              text-[#444]

              mb-[25px]
            "
          >
            Popular Cities
          </div>

          {/* ====================================================
              CITY GRID
          ==================================================== */}
          <div
            className="
              grid

              grid-cols-10

              gap-[7px]

              items-start

              justify-items-center
            "
          >
            {filteredCities.map((city) => (
              <button
                key={city.name}
                type="button"
                onClick={() => {
                  onSelectLocation(city.name);
                  onClose();
                }}
                className="
                  group

                  w-full

                  flex
                  flex-col

                  items-center

                  justify-start

                  outline-none
                "
              >
                {/* CITY ICON */}
                <div
                  className="
                    h-[52px]

                    flex
                    items-center
                    justify-center

                    text-[#5d6469]

                    group-hover:text-[#f84464]

                    transition-colors
                  "
                >
                  <CityIcon type={city.type} />
                </div>

                {/* CITY NAME */}
                <span
                  className="
                    mt-[7px]

                    text-[14px]

                    leading-[18px]

                    font-normal

                    text-[#666]

                    whitespace-nowrap

                    group-hover:text-[#f84464]

                    transition-colors
                  "
                >
                  {city.name}
                </span>
              </button>
            ))}
          </div>

          {/* ====================================================
              EMPTY SEARCH
          ==================================================== */}
          {filteredCities.length === 0 && (
            <div
              className="
                text-center

                text-[14px]

                text-gray-500

                mt-[20px]
              "
            >
              No cities found
            </div>
          )}

          {/* ====================================================
              VIEW ALL CITIES
          ==================================================== */}
          <button
            type="button"
            className="
              block

              mx-auto

              mt-[31px]

              text-[#f84464]

              text-[15px]

              leading-[18px]

              font-normal

              hover:underline
            "
          >
            View All Cities
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
