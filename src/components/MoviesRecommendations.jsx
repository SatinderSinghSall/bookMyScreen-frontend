import React from "react";

import { movies } from "../utils/constants";

const MoviesRecommendations = () => {
  return (
    <section className="w-full bg-white py-6 sm:py-8 lg:py-10">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-5 lg:px-6">
        {/* Section Header */}
        <div className="mb-5 flex items-center justify-between sm:mb-6">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl lg:text-3xl">
              Recommended Movies
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

        {/* Movies Grid */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-7 md:grid-cols-4 lg:grid-cols-5">
          {movies.map((movie, i) => (
            <article
              key={i}
              className="
                group
                min-w-0
                cursor-pointer
              "
            >
              {/* Movie Poster */}
              <div
                className="
                  relative
                  aspect-[2/3]
                  w-full
                  overflow-hidden
                  rounded-lg
                  bg-gray-100
                  shadow-sm
                  transition-all
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:shadow-lg
                  sm:rounded-xl
                "
              >
                <img
                  src={movie.img}
                  alt={`Movie - ${movie.title}`}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

                {/* Subtle overlay */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/10
                    via-transparent
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />
              </div>

              {/* Rating */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-2
                  rounded-b-lg
                  bg-gray-950
                  px-2
                  py-1.5
                  text-xs
                  text-white
                  sm:px-2.5
                  sm:text-sm
                  mt-1
                "
              >
                <span className="flex items-center gap-1 font-medium">
                  <span>🌟</span>
                  <span>{movie.rating}/10</span>
                </span>

                <span className="truncate text-gray-300">
                  {movie.votes} Votes
                </span>
              </div>

              {/* Movie Info */}
              <div className="pt-2 sm:pt-2.5">
                <h3
                  className="
                    truncate
                    text-sm
                    font-semibold
                    text-gray-900
                    sm:text-base
                    lg:text-lg
                  "
                  title={movie.title}
                >
                  {movie.title}
                </h3>

                <p
                  className="
                    mt-0.5
                    truncate
                    text-xs
                    text-gray-500
                    sm:text-sm
                  "
                  title={movie.genre}
                >
                  {movie.genre.replaceAll("/", " | ")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoviesRecommendations;
