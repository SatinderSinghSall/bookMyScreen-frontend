import { FiCode, FiLayers, FiMonitor, FiArrowUpRight } from "react-icons/fi";

export default function DeveloperCredit() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden

        bg-[#fafbfc]

        border-y
        border-slate-200/70
      "
    >
      {/* =====================================================
          BACKGROUND GRID
      ===================================================== */}
      <div
        className="
          absolute
          inset-0

          pointer-events-none

          opacity-[0.28]

          bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)]

          bg-[size:44px_44px]
        "
      />

      {/* =====================================================
          SOFT CENTER GLOW
      ===================================================== */}
      <div
        className="
          absolute

          left-1/2
          top-1/2

          -translate-x-1/2
          -translate-y-1/2

          w-[700px]
          h-[180px]

          rounded-full

          bg-cyan-400/[0.07]

          blur-[90px]

          pointer-events-none
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}
      <div
        className="
          relative
          z-10

          w-full

          px-5
          sm:px-8

          py-[38px]
          md:py-[42px]
        "
      >
        <div
          className="
            w-full
            max-w-[1200px]

            mx-auto

            flex
            flex-col
            items-center

            text-center
          "
        >
          {/* =================================================
              LABEL
          ================================================= */}
          <div
            className="
              flex
              items-center
              justify-center
              gap-3

              mb-3
            "
          >
            <span
              className="
                hidden
                sm:block

                w-[28px]
                h-px

                bg-gradient-to-r
                from-transparent
                to-cyan-400
              "
            />

            <span
              className="
                text-[9px]
                sm:text-[10px]

                uppercase

                tracking-[0.35em]

                font-semibold

                text-cyan-600
              "
            >
              Crafted &amp; Developed By
            </span>

            <span
              className="
                hidden
                sm:block

                w-[28px]
                h-px

                bg-gradient-to-l
                from-transparent
                to-cyan-400
              "
            />
          </div>

          {/* =================================================
              NAME
          ================================================= */}
          <h2
            className="
              text-[32px]
              sm:text-[38px]
              md:text-[44px]

              leading-none

              font-bold

              tracking-[-0.035em]
            "
          >
            <span
              className="
                bg-gradient-to-r
                from-[#111827]
                via-[#175cd3]
                to-[#06a9d7]

                bg-clip-text
                text-transparent
              "
            >
              Satinder Singh Sall
            </span>
          </h2>

          {/* =================================================
              DESCRIPTION
          ================================================= */}
          <p
            className="
              mt-3

              w-full
              max-w-[850px]

              text-[12px]
              sm:text-[13px]

              leading-5

              text-slate-500

              px-2
            "
          >
            Building polished digital experiences with a focus on performance,
            thoughtful interfaces and scalable engineering.
          </p>

          {/* =================================================
              SKILLS
          ================================================= */}
          <div
            className="
              mt-5

              flex
              flex-wrap

              items-center
              justify-center

              gap-2
            "
          >
            <Skill icon={FiCode}>Full-Stack</Skill>

            <Skill icon={FiMonitor}>UI / UX</Skill>

            <Skill icon={FiLayers}>Scalable Systems</Skill>
          </div>

          {/* =================================================
              BOTTOM SIGNATURE
          ================================================= */}
          <div
            className="
              mt-5

              flex
              items-center
              justify-center

              gap-2
            "
          >
            <span
              className="
                w-[35px]
                h-px

                bg-slate-200
              "
            />

            <span
              className="
                text-[10px]

                text-slate-400

                tracking-wide
              "
            >
              Designed with attention to detail
            </span>

            <FiArrowUpRight size={12} className="text-cyan-500" />

            <span
              className="
                w-[35px]
                h-px

                bg-slate-200
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SKILL CHIP
============================================================ */

function Skill({ icon: Icon, children }) {
  return (
    <div
      className="
        flex
        items-center
        gap-1.5

        px-3
        py-[6px]

        rounded-md

        bg-white

        border
        border-slate-200

        shadow-[0_1px_2px_rgba(15,23,42,0.03)]

        text-[10px]
        sm:text-[11px]

        font-medium

        text-slate-600

        transition-all
        duration-200

        hover:border-cyan-200
        hover:text-cyan-700

        hover:-translate-y-[1px]
      "
    >
      <Icon size={13} className="text-cyan-500" />

      <span>{children}</span>
    </div>
  );
}
