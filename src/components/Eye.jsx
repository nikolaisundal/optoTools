import { useState, useEffect } from "react";

export default function Eye({ className }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(event) {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    }
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const whiteEyeStyle = {};
  const blackEyeStyle = {
    left: `calc(50% - 4px + ${(position.x - window.innerWidth / 2) / 50}%)`,
    top: `calc(50% - 4px + ${(position.y - window.innerHeight / 2) / 50}%)`,
  };

  return (
    <div className={`relative h-16 w-16 ${className} hover:animate-bounce `}>
      <div
        className="absolute bottom-10 rounded-full h-10 w-10 bg-white border-black border-2"
        style={whiteEyeStyle}
      >
        <div
          className="absolute rounded-full h-5 w-5 bg-black"
          style={blackEyeStyle}
        ></div>
      </div>
    </div>
  );
}
