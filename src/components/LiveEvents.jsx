import React from "react";

import { events } from "../utils/constants";

const LiveEvents = () => {
  return (
    <section className="w-full bg-white py-8 sm:py-10 lg:py-12">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-5 lg:px-6">
        {/* Section Header */}
        <div className="mb-5 flex items-center justify-between sm:mb-6">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl lg:text-3xl">
              The Best Of Live Events
            </h2>

            <div className="mt-1 h-1 w-10 rounded-full bg-red-500" />
          </div>

          <button
            type="button"
            className="
              text-sm
              font-semibold
              text-red-500
              transition-colors
              duration-200
              hover:text-red-600
              hover:underline
              sm:text-base
              cursor-pointer
            "
          >
            See All
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
          {events.map((event, i) => (
            <article
              key={i}
              className="
                group
                relative
                min-w-0
                cursor-pointer
                overflow-hidden
                rounded-lg
                bg-gray-100
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                sm:rounded-xl
              "
            >
              {/* Event Image */}
              <div className="relative aspect-[2/3] w-full overflow-hidden">
                <img
                  src={event.img}
                  alt={event.title}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:scale-105
                  "
                />

                {/* Gradient Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-black/10
                    to-transparent
                    opacity-70
                    transition-opacity
                    duration-300
                    group-hover:opacity-90
                  "
                />

                {/* Event Title */}
                <div className="absolute inset-x-0 bottom-0 p-3">
                  <h3
                    className="
                      line-clamp-2
                      text-sm
                      font-semibold
                      leading-snug
                      text-white
                      sm:text-base
                    "
                    title={event.title}
                  >
                    {event.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveEvents;
