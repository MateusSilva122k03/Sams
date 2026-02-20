/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';

export default function App() {
  const [fireflies, setFireflies] = useState<{id: number, left: string, top: string, duration: string, delay: string}[]>([]);

  useEffect(() => {
    // Generate random fireflies for a magical atmosphere
    const flies = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${Math.random() * 4 + 3}s`,
      delay: `${Math.random() * 5}s`,
    }));
    setFireflies(flies);
  }, []);

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_#2a0813_0%,_#050102_100%)] flex flex-col items-center justify-center overflow-hidden relative font-serif">
      
      {/* Magical Fireflies Background */}
      {fireflies.map((fly) => (
        <div
          key={fly.id}
          className="absolute w-1 h-1 bg-yellow-100 rounded-full opacity-0 shadow-[0_0_8px_2px_#fef08a] pointer-events-none"
          style={{
            left: fly.left,
            top: fly.top,
            animation: `twinkle ${fly.duration} infinite ${fly.delay} alternate ease-in-out`
          }}
        />
      ))}

      {/* The Flower Container */}
      <div className="z-10 scale-75 sm:scale-100 mt-8 sm:mt-0 transition-transform duration-1000">
        <div className="flower">
          {/* 6 Petals for a Lily */}
          <div className="petal petal1"></div>
          <div className="petal petal2"></div>
          <div className="petal petal3"></div>
          <div className="petal petal4"></div>
          <div className="petal petal5"></div>
          <div className="petal petal6"></div>
          
          {/* 6 Stamens for a Lily */}
          <div className="stamen stamen1"></div>
          <div className="stamen stamen2"></div>
          <div className="stamen stamen3"></div>
          <div className="stamen stamen4"></div>
          <div className="stamen stamen5"></div>
          <div className="stamen stamen6"></div>
          
          {/* Center of the flower */}
          <div className="center"></div>
        </div>
      </div>
    </div>
  );
}
