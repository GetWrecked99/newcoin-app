import React, { useMemo, useRef, SetStateAction, Dispatch, FC } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface Props {
  position: { lat: number; lng: number };
  setPosition: Dispatch<SetStateAction<{ lat: number; lng: number }>>;
}

const CustomMap: FC<Props> = ({ position, setPosition }): JSX.Element => {
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker: any = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
        }
      },
    }),
    [setPosition]
  );

  return (
    <MapContainer
      className="h-full"
      center={[36.5659, 53.0586]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        draggable={true}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
      />
    </MapContainer>
  );
};

export { CustomMap };
