"use client";

import { useState, useEffect, useRef } from "react";

export default function ServicesCarousel({ services }) {
  const [page, setPage] = useState(0);
  const [cols, setCols] = useState(3);
  const pausedRef = useRef(false);

  useEffect(() => {
    function update() {
      if (window.innerWidth >= 1024) setCols(3);
      else if (window.innerWidth >= 640) setCols(2);
      else setCols(1);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalPages = Math.ceil(services.length / cols);
  const safePage = page % totalPages;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pausedRef.current) {
        setPage((p) => (p + 1) % totalPages);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const visible = services.slice(safePage * cols, safePage * cols + cols);

  return (
    <div
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-500">
          {totalPages > 1 ? `${safePage + 1} / ${totalPages}` : ""}
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPage((p) => (p - 1 + totalPages) % totalPages)}
            disabled={totalPages <= 1}
            className="w-9 h-9 rounded-full border border-gray-700 bg-gray-900 text-gray-400 hover:text-white hover:border-gray-500 transition-all duration-200 flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed text-lg leading-none"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => setPage((p) => (p + 1) % totalPages)}
            disabled={totalPages <= 1}
            className="w-9 h-9 rounded-full border border-gray-700 bg-gray-900 text-gray-400 hover:text-white hover:border-gray-500 transition-all duration-200 flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed text-lg leading-none"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>

      <div
        className="grid gap-5 md:gap-6"
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      >
        {visible.map((service) => (
          <div key={service.title} className="group rounded-xl border border-gray-800 bg-gray-900/50 p-6 hover:border-gray-700 hover:bg-gray-800/60 transition-all duration-300">
            <div
              className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-600/10 text-blue-400 group-hover:bg-blue-600/20 transition-colors duration-300"
              dangerouslySetInnerHTML={{ __html: service.iconSvg }}
            />
            <h3 className="text-lg font-semibold mb-2 text-gray-100">
              {service.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              aria-label={`Go to page ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-200 border-none cursor-pointer ${
                i === safePage ? "w-6 bg-blue-500" : "w-2 bg-gray-700 hover:bg-gray-600"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
