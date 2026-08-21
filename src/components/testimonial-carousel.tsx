import { useEffect, useRef, useState } from "react";

export type Testimonial = {
  zitat: string;
  quelle: string;
};

function Stars() {
  return (
    <div className="flex gap-1 text-primary">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function ArrowLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);

  const total = items.length;
  const duplicated = [...items, ...items];

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 768) setVisibleCount(1);
      else if (width < 1024) setVisibleCount(2);
      else setVisibleCount(4);
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    if (isPaused || total === 0) return;
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1 > total ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(id);
  }, [isPaused, total]);

  const handleTransitionEnd = () => {
    if (currentIndex >= total) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - total);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsTransitioning(true));
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1 > total ? 0 : prev + 1));
  };

  const goPrev = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        setIsTransitioning(false);
        return total;
      }
      return prev - 1;
    });
  };

  const itemWidthPercent = 100 / visibleCount;
  const translateX = -(currentIndex * itemWidthPercent);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex"
          style={{
            transform: `translateX(${translateX}%)`,
            transition: isTransitioning ? "transform 700ms ease-in-out" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {duplicated.map((item, i) => (
            <div
              key={i}
              className="w-full flex-shrink-0 px-3 md:w-1/2 lg:w-1/3"
              style={{ flex: `0 0 ${itemWidthPercent}%` }}
            >
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-sm">
                <Stars />
                <blockquote className="mt-6 flex-1 text-base leading-relaxed text-card-foreground">
                  {item.zitat}
                </blockquote>
                <figcaption className="mt-6 text-sm font-medium text-muted-foreground">
                  {item.quelle}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Vorherige Bewertung"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all hover:border-primary hover:bg-primary hover:text-white"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Nächste Bewertung"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all hover:border-primary hover:bg-primary hover:text-white"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
