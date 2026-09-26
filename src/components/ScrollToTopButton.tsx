import { useEffect, useState } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

const OFFSET_TOP = 500;
const SIZE = 48;
const STROKE = 3;
const RADIUS = (SIZE - STROKE * 2) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ScrollToTopButton() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setVisible(scrollTop > OFFSET_TOP);
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const strokeDashoffset = CIRCUMFERENCE * (1 - progress);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        rounded-full
        bg-zinc-900
        border border-zinc-800
        shadow-md
        transition-all duration-200
        hover:bg-zinc-800
        focus:outline-none
      "
      style={{ width: SIZE, height: SIZE }}
    >
      {/* Progress ring */}
      <svg
        width={SIZE}
        height={SIZE}
        className="absolute top-0 left-0 -rotate-90"
      >
        {/* Track */}
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          strokeWidth={STROKE}
          className="stroke-zinc-800"
        />
        {/* Progress */}
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          strokeWidth={STROKE}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="stroke-blue-400 transition-all duration-100"
        />
      </svg>

      {/* Arrow icon */}
      <FaCircleArrowUp className="relative z-10 text-lg text-zinc-300" />
    </button>
  );
}
