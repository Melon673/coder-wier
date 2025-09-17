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
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const timeoutRef = useRef(null);
  const [isGlobeReady, setIsGlobeReady] = useState(false);

  // Handle window resize to make globe responsive
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        // Calculate height based on aspect ratio
        const height = Math.max(width * 0.6, 400);
        setDimensions({ width, height });
      }
    };

    // Initial size calculation
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Disable zoom but keep rotation enabled
  useEffect(() => {
    if (globeRef.current && isGlobeReady) {
      const globe = globeRef.current;
      globe.controls().enableZoom = false;
      globe.controls().enablePan = false;
      
      // Additional prevention for touch zoom
      const canvas = globe.renderer().domElement;
      const preventZoom = (e) => {
        if (e.touches && e.touches.length > 1) {
          e.preventDefault();
        }
      };
      
      canvas.addEventListener('touchstart', preventZoom, { passive: false });
      canvas.addEventListener('touchmove', preventZoom, { passive: false });
      
      return () => {
        canvas.removeEventListener('touchstart', preventZoom);
        canvas.removeEventListener('touchmove', preventZoom);
      };
    }
  }, [isGlobeReady]);

  const handleLabelClick = (marker) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (globeRef.current) {
      globeRef.current.pointOfView(
        { lat: marker.coords[0], lng: marker.coords[1], altitude: 1.2 },
        1500
      );
      setSelectedLocation(marker);

      timeoutRef.current = setTimeout(() => {
        globeRef.current.pointOfView({ lat: 0, lng: 0, altitude: 2.5 }, 1500);
        setSelectedLocation(null);
      }, 5000);
    }
  };

  // Default images if custom ones aren't available
  const earthImage = "/globe/earth-blue-marble.jpg" || "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg";
  const backgroundImage = "/globe/night-sky.png" || "//unpkg.com/three-globe/example/img/night-sky.png";

  return (
    <div 
      ref={containerRef} 
      className="globe-container"
      style={{ 
        width: "100%", // Full width
        height: `550px`,
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(0deg, #0a192f 0%, #1a365d 100%)",
      }}
    >
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Globe
          ref={globeRef}
          width={dimensions.width}
          height={dimensions.height}
          globeImageUrl={earthImage}
          backgroundImageUrl={backgroundImage}
          onGlobeReady={() => {
            setIsGlobeReady(true);
            if (globeRef.current) {
              globeRef.current.controls().enableZoom = false;
              globeRef.current.controls().enablePan = false;
              globeRef.current.pointOfView({ lat: 0, lng: 0, altitude: 2.5 }, 0);
            }
          }}
          labelsData={LOCATIONS}
          labelLat={(d) => d.coords[0]}
          labelLng={(d) => d.coords[1]}
          labelText={(d) => d.name}
          labelSize={2.5}
          labelDotRadius={1.5}
          labelColor={() => "#ffffff"}
          labelResolution={2}
          labelDotOrientation={() => "right"}
          labelLabel={({ name, address }) => `
            <div style="
              background: rgba(15, 40, 110, 0.85);
              color: #FFFDFD;
              padding: 8px 12px;
              border-radius: 8px;
              font-size: 14px;
              backdrop-filter: blur(5px);
              border: 1px solid rgba(255, 255, 255, 0.2);
            ">
              <strong>${name}</strong><br/>
              <span style="font-size: 12px;">${address}</span>
            </div>
          `}
          onLabelClick={handleLabelClick}
        />
      </div>

      {selectedLocation && (
        <div
          className="location-info"
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
            padding: "20px",
            borderRadius: "12px",
            maxWidth: "320px",
            zIndex: 1000,
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <h3 style={{ margin: 0, fontSize: "18px", color: "#e63946" }}>
            {selectedLocation.name}
          </h3>
          <p style={{ margin: 0, fontSize: "14px", color: "white" }}>
            {selectedLocation.address}
          </p>
        </div>
      )}

      <style jsx>{`
        .globe-container {
          width: 100%;
          position: relative;
        }
        
        @media (max-width: 768px) {
          .location-info {
            left: 10px !important;
            bottom: 10px !important;
            padding: 15px !important;
            max-width: 280px !important;
          }
        }
        
        @media (max-width: 480px) {
          .location-info {
            max-width: 220px !important;
            padding: 12px !important;
          }
          
          .location-info h3 {
            font-size: 16px !important;
          }
          
          .location-info p {
            font-size: 12px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default WorldGlobeWithStats;