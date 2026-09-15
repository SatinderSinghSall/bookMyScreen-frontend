import React from "react";
import {
  FiBell,
  FiHeart,
  FiMonitor,
  FiCreditCard,
  FiMessageCircle,
  FiSettings,
  FiGift,
  FiGlobe,
  FiLock,
  FiChevronRight,
  FiX,
} from "react-icons/fi";

const menuItems = [
  {
    label: "Notifications",
    icon: FiBell,
    arrow: true,
  },
  {
    label: "Your Orders",
    description: "View all your bookings & purchases",
    icon: FiCreditCard,
    locked: true,
    disabled: true,
  },
  {
    label: "Your Wishlist",
    icon: FiHeart,
    arrow: true,
  },
  {
    label: "Stream Library",
    description: "Rented & Purchased Movies",
    icon: FiMonitor,
    locked: true,
    disabled: true,
  },
  {
    label: "Play Credit Card",
    description: "View your Play Credit Card details and offers",
    icon: FiCreditCard,
    arrow: true,
  },
  {
    label: "Help & Support",
    description: "View commonly asked queries and Chat",
    icon: FiMessageCircle,
    arrow: true,
  },
  {
    label: "Accounts & Settings",
    description: "Location, Payments, Permissions & More",
    icon: FiSettings,
    locked: true,
    disabled: true,
  },
  {
    label: "Rewards",
    description: "View your rewards & unlock new ones",
    icon: FiGift,
    arrow: true,
  },
  {
    label: "BookAChange",
    icon: FiGlobe,
    arrow: true,
  },
];

const MenuDrawer = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* =====================================================
          DARK OVERLAY
      ===================================================== */}
      <div
        className="
          absolute
          inset-0
          bg-black/65
        "
        onClick={onClose}
      />

      {/* =====================================================
          RIGHT DRAWER
      ===================================================== */}
      <aside
        className="
          absolute
          right-0
          top-0

          h-full
          w-full
          sm:w-[385px]

          bg-white

          shadow-[-4px_0_15px_rgba(0,0,0,0.18)]

          overflow-y-auto

          animate-[slideIn_0.2s_ease-out]
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}
        <div
          className="
            h-[68px]

            px-[18px]

            flex
            items-center
            justify-between

            border-b
            border-[#e5e5e5]
          "
        >
          <h2
            className="
              text-[24px]
              font-semibold
              text-[#222]
            "
          >
            Hey!
          </h2>

          {/* Close button */}
          <button
            onClick={onClose}
            className="
              w-[34px]
              h-[34px]

              flex
              items-center
              justify-center

              text-gray-500

              hover:text-[#f84464]

              sm:hidden
            "
          >
            <FiX size={22} />
          </button>
        </div>

        {/* =================================================
            OFFER / LOGIN SECTION
        ================================================= */}
        <div
          className="
            min-h-[70px]

            px-[18px]

            flex
            items-center
            justify-between

            border-b
            border-[#ddd]

            shadow-[0_2px_4px_rgba(0,0,0,0.12)]
          "
        >
          {/* Offer icon + text */}
          <div className="flex items-center gap-4">
            <div
              className="
                w-[42px]
                h-[42px]

                rounded-full

                bg-[#f1f3ff]

                flex
                items-center
                justify-center
              "
            >
              <span className="text-[23px]">🎁</span>
            </div>

            <div
              className="
                text-[14px]
                leading-[20px]
                text-[#6d78aa]
                font-medium
              "
            >
              Unlock special offers &<br />
              great benefits
            </div>
          </div>

          {/* Login */}
          <button
            className="
              h-[38px]

              px-[13px]

              border
              border-[#f84464]

              rounded-[6px]

              bg-white

              text-[#f84464]

              text-[13px]

              font-semibold

              whitespace-nowrap

              hover:bg-[#fff5f7]

              transition
            "
          >
            Login / Register
          </button>
        </div>

        {/* =================================================
            MENU ITEMS
        ================================================= */}
        <div>
          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                disabled={item.disabled}
                className={`
                  w-full

                  min-h-[65px]

                  px-[18px]

                  flex
                  items-center

                  text-left

                  border-b
                  border-[#eeeeee]

                  transition

                  ${item.disabled ? "cursor-default" : "hover:bg-[#fafafa]"}
                `}
              >
                {/* ICON */}
                <div
                  className={`
                    w-[34px]
                    flex
                    justify-start

                    ${item.disabled ? "text-[#c7c7c7]" : "text-[#444]"}
                  `}
                >
                  <Icon size={21} strokeWidth={1.5} />
                </div>

                {/* TEXT */}
                <div
                  className={`
                    flex-1
                    ml-[8px]

                    ${item.disabled ? "text-[#bdbdbd]" : "text-[#222]"}
                  `}
                >
                  <div
                    className="
                      text-[15px]
                      leading-[20px]
                      font-medium
                    "
                  >
                    {item.label}
                  </div>

                  {item.description && (
                    <div
                      className={`
                        mt-[2px]

                        text-[12px]

                        leading-[17px]

                        ${item.disabled ? "text-[#c4c4c4]" : "text-[#777]"}
                      `}
                    >
                      {item.description}
                    </div>
                  )}
                </div>

                {/* RIGHT ICON */}
                <div
                  className={`
                    ml-2

                    ${item.disabled ? "text-[#c7c7c7]" : "text-[#555]"}
                  `}
                >
                  {item.locked && <FiLock size={14} strokeWidth={1.5} />}

                  {item.arrow && <FiChevronRight size={18} strokeWidth={1.5} />}
                </div>
              </button>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default MenuDrawer;
