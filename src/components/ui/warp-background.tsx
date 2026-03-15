import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { HTMLAttributes, useCallback, useMemo } from "react";

interface WarpBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  perspective?: number;
  beamsPerSide?: number;
  beamSize?: number;
  beamDelayMax?: number;
  beamDelayMin?: number;
  beamDuration?: number;
  gridColor?: string;
}

const Beam = ({
  width,
  x,
  delay,
  duration,
}: {
  width: string | number;
  x: string | number;
  delay: number;
  duration: number;
}) => {
  const hue = Math.floor(Math.random() * 360);
  const ar = Math.floor(Math.random() * 10) + 1;

  return (
    <motion.div
      style={{
        "--x": `${x}%`,
        "--width": `${width}%`,
        "--aspect-ratio": ar,
        "--background": `linear-gradient(hsl(${hue} 80% 60%), transparent)`,
      } as React.CSSProperties}
      className={`absolute left-[var(--x)] top-0 [aspect-ratio:1/var(--aspect-ratio)] [background:var(--background)] [width:var(--width)]`}
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "-100%", opacity: [0, 1, 1, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

export const WarpBackground: React.FC<WarpBackgroundProps> = ({
  children,
  perspective = 100,
  className,
  beamsPerSide = 3,
  beamSize = 5,
  beamDelayMax = 3,
  beamDelayMin = 0,
  beamDuration = 3,
  gridColor = "hsl(var(--border))",
  ...props
}) => {
  const generateBeams = useCallback(() => {
    const beams = [];
    const cellsPerSide = Math.floor(100 / beamSize);
    const step = cellsPerSide / beamsPerSide;

    for (let i = 0; i < beamsPerSide; i++) {
      const x = Math.floor(i * step);
      const delay =
        Math.random() * (beamDelayMax - beamDelayMin) + beamDelayMin;
      beams.push({ x, delay });
    }
    return beams;
  }, [beamsPerSide, beamSize, beamDelayMax, beamDelayMin]);

  const topBeams = useMemo(() => generateBeams(), [generateBeams]);
  const rightBeams = useMemo(() => generateBeams(), [generateBeams]);
  const bottomBeams = useMemo(() => generateBeams(), [generateBeams]);
  const leftBeams = useMemo(() => generateBeams(), [generateBeams]);

  return (
    <div
      className={cn("relative overflow-hidden rounded-lg", className)}
      {...props}
    >
      <div
        style={{
          "--perspective": `${perspective}px`,
          "--grid-color": gridColor,
          "--beam-size": `${beamSize}%`,
        } as React.CSSProperties}
        className="pointer-events-none absolute inset-0 overflow-hidden [perspective:var(--perspective)]"
      >
        <div className="absolute inset-0 [transform-style:preserve-3d]">
          {/* top side */}
          <div
            className={`absolute inset-0 overflow-hidden [background-image:linear-gradient(var(--grid-color)_1px,transparent_1px),linear-gradient(90deg,var(--grid-color)_1px,transparent_1px)] [background-size:var(--beam-size)_var(--beam-size)] [transform-origin:100%_0%] [transform:rotateX(-90deg)]`}
          >
            {topBeams.map((beam, index) => (
              <Beam
                key={`top-${index}`}
                width={beamSize}
                x={beam.x * beamSize}
                delay={beam.delay}
                duration={beamDuration}
              />
            ))}
          </div>

          {/* bottom side */}
          <div
            className={`absolute inset-0 overflow-hidden [background-image:linear-gradient(var(--grid-color)_1px,transparent_1px),linear-gradient(90deg,var(--grid-color)_1px,transparent_1px)] [background-size:var(--beam-size)_var(--beam-size)] [transform-origin:0%_100%] [transform:rotateX(90deg)]`}
          >
            {bottomBeams.map((beam, index) => (
              <Beam
                key={`bottom-${index}`}
                width={beamSize}
                x={beam.x * beamSize}
                delay={beam.delay}
                duration={beamDuration}
              />
            ))}
          </div>

          {/* left side */}
          <div
            className={`absolute inset-0 overflow-hidden [background-image:linear-gradient(var(--grid-color)_1px,transparent_1px),linear-gradient(90deg,var(--grid-color)_1px,transparent_1px)] [background-size:var(--beam-size)_var(--beam-size)] [transform-origin:0%_0%] [transform:rotateY(90deg)]`}
          >
            {leftBeams.map((beam, index) => (
              <Beam
                key={`left-${index}`}
                width={beamSize}
                x={beam.x * beamSize}
                delay={beam.delay}
                duration={beamDuration}
              />
            ))}
          </div>

          {/* right side */}
          <div
            className={`absolute inset-0 overflow-hidden [background-image:linear-gradient(var(--grid-color)_1px,transparent_1px),linear-gradient(90deg,var(--grid-color)_1px,transparent_1px)] [background-size:var(--beam-size)_var(--beam-size)] [transform-origin:100%_0%] [transform:rotateY(-90deg)]`}
          >
            {rightBeams.map((beam, index) => (
              <Beam
                key={`right-${index}`}
                width={beamSize}
                x={beam.x * beamSize}
                delay={beam.delay}
                duration={beamDuration}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative">{children}</div>
    </div>
  );
};
