import { useLayoutEffect } from "react";
import mapboxgl from "mapbox-gl";

export default function useMapbox(container, center, zoom) {
    mapboxgl.accessToken =
    "pk.eyJ1Ijoib3RyaWNhbGEiLCJhIjoiY2tqMjFjcTNzMnp2djJ1bW05NW9zd2h6NCJ9.0w535oE4G9JjDpDxC_vVuw";
    let c1, c2
    if (center) {
        [c1, c2] = center
    }
    if (!container) {
        container = "map";
    }
    if (!c1) {
        c1 = 37.61192;
    }
    if (!c2) {
        c2 = 55.76199;
    }
    if (!zoom) {
        zoom = 10;
    }
    useLayoutEffect(() => {
        console.log(1);
        const map = new mapboxgl.Map({
          container: container,
          style: "mapbox://styles/mapbox/dark-v10",
          center: [c1, c2],
          zoom: zoom
        });
        return() => {
            map.remove();
        }
    }, [container, zoom, c1, c2]);
}
