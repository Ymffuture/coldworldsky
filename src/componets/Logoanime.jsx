import React from "react";

const AnimatedVisionLogo = ({
  size = 64,
  color = "#1E90FF",
  speed = 4 // animation duration in seconds
}) => {
  const dashArray = 2 * Math.PI * 30; // Circumference of r=30 (circle)
  const duration = `${speed}s`;

  // Inline keyframe animations
  const keyframes = `
    @keyframes circleSpin {
      0% {
        stroke-dashoffset: ${dashArray};
      }
      50% {
        stroke-dashoffset: 0;
      }
      100% {
        stroke-dashoffset: ${dashArray};
      }
    }

    @keyframes pulse {
      0%, 100% {
        stroke-width: 4;
        opacity: 1;
      }
      50% {
        stroke-width: 6;
        opacity: 0.6;
      }
    }
  `;

  // Inject keyframes into the DOM
  if (typeof document !== "undefined" && !document.getElementById("animated-logo-keyframes")) {
    const style = document.createElement("style");
    style.id = "animated-logo-keyframes";
    style.innerHTML = keyframes;
    document.head.appendChild(style);
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
    >
      {/* Animated circle */}
      <circle
        cx="32"
        cy="32"
        r="30"
        fill="transparent"
        stroke={color}
        strokeWidth="4"
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashArray,
          animation: `circleSpin ${duration} ease-in-out infinite`,
          transform: "rotate(-90deg)",
          transformOrigin: "center",
        }}
      />

      {/* Vision path (eye + tail) */}
      <path
        d="M32 20a12 12 0 1 1 0 24m0 0l6 6"
        stroke={color}
        fill="transparent"
        strokeLinecap="round"
        style={{
          strokeWidth: 4,
          animation: `pulse 2s ease-in-out infinite`,
          transformOrigin: "center",
        }}
      />
    </svg>
  );
};

export default AnimatedVisionLogo;

