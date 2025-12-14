import { useLocation } from "react-router-dom";
import { ScrollContext } from "../store/context";
import React, { Suspense, lazy, useContext } from "react";

/**
 * Lazy-load SparklesCore
 */
const SparklesCore = lazy(() =>
  import("./sparkles").then((mod) => ({ default: mod.SparklesCore }))
);

export const ThemeSparkles: React.FC = () => {
//@ts-ignore
  const { dark } = useContext(ScrollContext);
  const location = useLocation()
  const isProjectRoute = /^\/projects\/.+/.test(location.pathname);
    const isBlogRoute = /^\/blog\/.+/.test(location.pathname);
    const isPrivacy = /^\/privacy/.test(location.pathname);


  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ width: "100vw", height: "100vh" }}
    >
      <Suspense fallback={null}>
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.8}
          maxSize={1.8}
          speed={0.5}
          particleDensity={80}
          className="w-screen h-screen"
        
          particleColor={
            dark
              ? "rgba(255, 255, 255, 0.3)"
              : (isProjectRoute || isBlogRoute || isPrivacy ? "rgba(177, 177, 177, 0.1)" : "rgba(141, 141, 141, 0.1)")
          }
        />
      </Suspense>
    </div>
  );
};
