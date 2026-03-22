import { useEffect } from "react";

const BackgroundEffects = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-blue-50/60 dark:bg-[#030610] transition-colors duration-500">
      {/* Ambient Glow Blobs */}
      <div className="ambient-glow">
        <div className="glow-blob bg-blue-600/50 dark:bg-blue-600/40 w-[600px] h-[600px] top-[-20%] left-[-10%] mix-blend-multiply dark:mix-blend-screen" />
        <div className="glow-blob bg-blue-600/50 dark:bg-blue-700/40 w-[500px] h-[500px] top-[40%] right-[-10%] mix-blend-multiply dark:mix-blend-screen" style={{ animationDelay: '2s' }} />
        <div className="glow-blob bg-blue-500/50 dark:bg-blue-600/40 w-[400px] h-[400px] bottom-[-10%] left-[20%] mix-blend-multiply dark:mix-blend-screen" style={{ animationDelay: '4s' }} />
      </div>

      {/* Cursor Spotlight */}
      <div className="spotlight-overlay" />

      {/* Energy Streaks */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)' }}>
        <div className="energy-streak layer-far" style={{ left: '2%', animationDuration: '13s', animationDelay: '-2s', '--streak-opacity': '0.08' } as React.CSSProperties} />
        <div className="energy-streak layer-far hidden md:block" style={{ left: '15%', animationDuration: '15s', animationDelay: '-10s', '--streak-opacity': '0.1' } as React.CSSProperties} />
        <div className="energy-streak layer-mid" style={{ left: '22%', animationDuration: '8s', animationDelay: '-5s', '--streak-opacity': '0.18' } as React.CSSProperties} />
        <div className="energy-streak layer-mid" style={{ left: '35%', animationDuration: '10s', animationDelay: '-1s', '--streak-opacity': '0.2' } as React.CSSProperties} />
        <div className="energy-streak layer-near star hidden md:block" style={{ left: '42%', animationDuration: '4s', animationDelay: '-3s', '--streak-opacity': '0.5' } as React.CSSProperties} />
        <div className="energy-streak layer-far" style={{ left: '50%', animationDuration: '14s', animationDelay: '-12s', '--streak-opacity': '0.09' } as React.CSSProperties} />
        <div className="energy-streak layer-mid" style={{ left: '60%', animationDuration: '8s', animationDelay: '-8s', '--streak-opacity': '0.19' } as React.CSSProperties} />
        <div className="energy-streak layer-near" style={{ left: '68%', animationDuration: '5s', animationDelay: '-4s', '--streak-opacity': '0.4' } as React.CSSProperties} />
        <div className="energy-streak layer-far hidden md:block" style={{ left: '75%', animationDuration: '15s', animationDelay: '-6s', '--streak-opacity': '0.1' } as React.CSSProperties} />
        <div className="energy-streak layer-mid" style={{ left: '82%', animationDuration: '9s', animationDelay: '-9s', '--streak-opacity': '0.22' } as React.CSSProperties} />
        <div className="energy-streak layer-mid" style={{ left: '90%', animationDuration: '7s', animationDelay: '-2s', '--streak-opacity': '0.25' } as React.CSSProperties} />
      </div>

      {/* Tech Grid */}
      <div className="tech-grid bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]" />

      {/* Top Edge Light */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent to-transparent via-blue-500/50" />
    </div>
  );
};

export default BackgroundEffects;
