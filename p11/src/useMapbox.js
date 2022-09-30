import { useLayoutEffect } from "react";
import mapboxgl from "mapbox-gl";

export default function useMapbox(container, center, zoom) {
    mapboxgl.accessToken =
    "pk.eyJ1Ijoib3RyaWNhbGEiLCJhIjoiY2tqMjFjcTNzMnp2djJ1bW05NW9zd2h6NCJ9.0w535oE4G9JjDpDxC_vVuw";
    if (!container) {
        container = "map";
    }
    if (!center) {
        center = [37.61192, 55.76199];
    }
    if (!zoom) {
        zoom = 10
    }
    useLayoutEffect(() => {
        const map = new mapboxgl.Map({
          container: container,
          style: "mapbox://styles/mapbox/dark-v10",
          center: center,
          zoom: zoom
        });
        return() => {
            map.remove();
        }
    });
}
