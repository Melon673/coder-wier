"use client";
import React, { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const LOCATIONS = [
  {
    name: "India",
    coords: [23.033863, 72.585022],
    address:
      "1110-Zion Z1, Sindhu Bhavan Marg, Bodakdev, Ahmedabad, Gujarat 380054",
  },
  {
    name: "USA",
    coords: [40.7128, -74.006],
    address: "Thinkwik LLC, 1 Biscayne way, Monroe NJ-08831, USA",
  },
  {
    name: "Pakistan",
    coords: [31.5204, 74.3587],
    address: "Office 102 Garden tower, 47 Babar block, Garden town Lahore",
  },
  {
    name: "Canada",
    coords: [46.1212866, -81.3161],
    address: "107-536, Ivings Drive, Port Elgin, N0H2C1, Ontario, Canada",
  },
  {
    name: "Germany",
    coords: [51.2964, 6.8493],
    address: "Berliner Str 38, 40880 Ratingen, Germany",
  },
];

const WorldGlobeWithStats = () => {
  const globeRef = useRef();
  const containerRef = useRef();
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 600 });
  const [isGlobeReady, setIsGlobeReady] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  const interactionTimeoutRef = useRef(null);
  const cycleIntervalRef = useRef(null);

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Configure controls
  useEffect(() => {
    if (globeRef.current && isGlobeReady) {
      const controls = globeRef.current.controls();
      controls.enableZoom = false;
      controls.enablePan = false;

      const startInteraction = () => {
        setIsUserInteracting(true);
        if (interactionTimeoutRef.current)
          clearTimeout(interactionTimeoutRef.current);
        interactionTimeoutRef.current = setTimeout(
          () => setIsUserInteracting(false),
          5000
        );
      };

      controls.addEventListener("start", startInteraction);
      return () => controls.removeEventListener("start", startInteraction);
    }
  }, [isGlobeReady]);

  // Auto-cycle locations
  useEffect(() => {
    if (!isGlobeReady) return;

    cycleIntervalRef.current = setInterval(() => {
      if (isUserInteracting || !globeRef.current) return;

      const nextIndex = (currentIndex + 1) % LOCATIONS.length;
      setCurrentIndex(nextIndex);

      const loc = LOCATIONS[nextIndex];
      globeRef.current.pointOfView(
        { lat: loc.coords[0], lng: loc.coords[1], altitude: 1.5 },
        2500
      );
      setSelectedLocation(loc);
    }, 3000);

    return () => clearInterval(cycleIntervalRef.current);
  }, [isGlobeReady, currentIndex, isUserInteracting]);

  const earthImage = "/globe/earth-blue-marble.jpg";
  const backgroundImage = "/globe/night-sky.png";

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "600px", // ✅ fixed height to ensure visibility
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(0deg, #0a192f 0%, #1a365d 100%)",
        borderRadius: "12px",
      }}
    >
      <Globe
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}
        globeImageUrl={earthImage}
        backgroundImageUrl={backgroundImage}
        showAtmosphere
        atmosphereColor="lightskyblue"
        atmosphereAltitude={0.25}
        onGlobeReady={() => {
          setIsGlobeReady(true);
          globeRef.current.pointOfView({ lat: 0, lng: 0, altitude: 1.5 }, 0);
        }}
        onLabelClick={(d) => {
          globeRef.current.pointOfView(
            { lat: d.coords[0], lng: d.coords[1], altitude: 1.5 },
            2000
          );
          setSelectedLocation(d);
        }}
        labelsData={LOCATIONS}
        labelLat={(d) => d.coords[0]}
        labelLng={(d) => d.coords[1]}
        labelText={(d) => d.name}
        labelSize={2.7}
        labelDotRadius={1.6}
        labelColor={() => "#ffffff"}
        labelDotOrientation={() => "right"}
        labelResolution={3}
        labelLabel={({ name, address }) => `
          <div style="
            background: rgba(15, 40, 110, 0.85);
            color: #FFFDFD;
            padding: 8px 12px;
            border-radius: 8px;
            font-size: 14px;
            backdrop-filter: blur(6px);
            border: 1px solid rgba(255, 255, 255, 0.25);
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          ">
            <strong>${name}</strong><br/>
            <span style="font-size: 12px;">${address}</span>
          </div>
        `}
      />

      {selectedLocation && (
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
            padding: "20px",
            borderRadius: "14px",
            maxWidth: "320px",
            zIndex: 10,
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(14px)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.35)",
            border: "1px solid rgba(255, 255, 255, 0.25)",
          }}
        >
          <h3 style={{ margin: 0, fontSize: "18px", color: "#ffdd57" }}>
            {selectedLocation.name}
          </h3>
          <p style={{ margin: 0, fontSize: "14px", color: "white" }}>
            {selectedLocation.address}
          </p>
        </div>
      )}
    </div>
  );
};

export default WorldGlobeWithStats;
