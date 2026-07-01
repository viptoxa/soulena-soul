"use client";

import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { PHUKET_CENTER } from "@/lib/constants";

// Beach locations plotted on the interactive Phuket map
export interface MapLocation {
  name: string;
  lat: number;
  lng: number;
}

function pinIcon(active: boolean) {
  const color = active ? "#6b5b3e" : "#8b7355";
  return L.divIcon({
    className: "soulena-pin",
    html: `
      <svg width="${active ? 34 : 28}" height="${active ? 46 : 38}" viewBox="0 0 30 40" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 0C6.7 0 0 6.7 0 15c0 10.5 15 25 15 25s15-14.5 15-25C30 6.7 23.3 0 15 0z" fill="${color}"/>
        <circle cx="15" cy="15" r="5.5" fill="#f5f0e8"/>
      </svg>`,
    iconSize: active ? [34, 46] : [28, 38],
    iconAnchor: active ? [17, 46] : [14, 38],
    popupAnchor: [0, active ? -42 : -34],
  });
}

function MapController({
  locations,
  activeIndex,
}: {
  locations: readonly MapLocation[];
  activeIndex: number;
}) {
  const map = useMap();
  const firstRun = useRef(true);

  // Leaflet mis-measures inside an aspect-ratio container that sizes after
  // first paint — re-measure on every container resize to keep tiles filled.
  useEffect(() => {
    const container = map.getContainer();
    const ro = new ResizeObserver(() => map.invalidateSize());
    ro.observe(container);
    map.invalidateSize();
    return () => ro.disconnect();
  }, [map]);

  // Fly to the selected location (but keep the island overview on first render).
  // flyTo animates in real browsers; the guaranteed setView lands the view even
  // where CSS-transition events don't fire (e.g. some automated browsers).
  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    const loc = locations[activeIndex];
    if (!loc) return;
    const target: [number, number] = [loc.lat, loc.lng];
    map.flyTo(target, 13, { duration: 1.2 });
    const settle = setTimeout(() => {
      if (Math.abs(map.getCenter().lat - loc.lat) > 0.001) {
        map.setView(target, 13, { animate: false });
      }
    }, 1400);
    return () => clearTimeout(settle);
  }, [activeIndex, locations, map]);

  return null;
}

export default function PhuketMap({
  locations,
  activeIndex,
  onMarkerClick,
}: {
  locations: readonly MapLocation[];
  activeIndex: number;
  onMarkerClick: (index: number) => void;
}) {
  return (
    <MapContainer
      center={[PHUKET_CENTER.lat, PHUKET_CENTER.lng]}
      zoom={PHUKET_CENTER.zoom}
      scrollWheelZoom={false}
      className="h-full w-full"
      style={{ background: "#f5f0e8" }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      {locations.map((loc, i) => (
        <Marker
          key={loc.name}
          position={[loc.lat, loc.lng]}
          icon={pinIcon(i === activeIndex)}
          eventHandlers={{ click: () => onMarkerClick(i) }}
        >
          <Popup>
            <span className="block font-serif text-brand-charcoal">{loc.name}</span>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                loc.name + ", Phuket, Thailand"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-olive text-xs underline underline-offset-2"
            >
              Open in Google Maps ↗
            </a>
          </Popup>
        </Marker>
      ))}
      <MapController locations={locations} activeIndex={activeIndex} />
    </MapContainer>
  );
}
