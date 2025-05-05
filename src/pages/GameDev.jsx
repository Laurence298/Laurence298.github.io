import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import aboutMe from "../assets/AboutMe.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavbarContext } from "../components/Hook";

export default function GameDev() {
  const swiperRef = useRef(null);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const { Index } = useNavbarContext();

  useEffect(() => {
    console.log("Index", Index);
    swiperRef.current.slideTo(Index);
  }, [Index]);

  return (
    <div className="min-h-[calc(100vh-184px)] py-1 px-1 sm:px-8 flex items-center justify-center bg-gray-50">
      <div className="w-4/5 max-w-8xl h-full">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          navigation={true}
          pagination={pagination}
          modules={[Navigation, Pagination]}
          className="h-full rounded-xl shadow-lg bg-white"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
        >
          {aboutMe.map((file, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row h-full p-4 sm:p-8 gap-6">
                {/* Image Section */}
                <div
                  className={`lg:w-1/2 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden p-4 ${
                    !file.image && !file.video ? "hidden" : ""
                  }`}
                >
                  {file.image ? (
                    <img
                      src={file.image}
                      alt={file.title}
                      className="max-h-[400px] w-auto object-contain"
                    />
                  ) : file.video ? (
                    <div
                      className="relative w-full h-0"
                      style={{ paddingBottom: "56.25%" }}
                    >
                      <iframe
                        src={`https://www.youtube.com/embed/${file.video}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                      ></iframe>
                    </div>
                  ) : null}
                </div>

                {/* Content Section */}
                <div
                  className={`lg:w-1/2 flex mx-auto flex-col justify-center p-4
                  }`}
                >
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center ">
                    {file.title}
                  </h1>

                  <div className="text-gray-600 mb-6 leading-relaxed space-y-4">
                    {file.description.split("\n\n").map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Tasks Section */}
                  {file.tasks && file.tasks.length > 0 && (
                    <div className="mb-6 ">
                      <h2 className="text-lg  font-semibold text-gray-700 mb-2">
                        Key Tasks:
                      </h2>
                      <ul className="list-disc pl-5 space-y-1">
                        {file.tasks.map((task, i) => (
                          <li key={i} className="text-gray-600">
                            {task.task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Links Section */}
                  {file.links && file.links.length > 0 && (
                    <div>
                      <h2 className="text-lg font-semibold text-gray-700 mb-2">
                        {file.linkName ? file.linkName : "Links"}
                      </h2>
                      <ul className="space-y-2">
                        {file.links.map((i, index) => (
                          <li key={i}>
                            <a
                              href={i.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-indigo-600 hover:text-indigo-800 hover:underline transition-colors"
                            >
                              {i.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
