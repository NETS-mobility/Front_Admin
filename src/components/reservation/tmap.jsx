import "./tmap.css";
const { Tmapv2 } = window;
var map;
const initTmap = (x, y) => {
  map = new Tmapv2.Map("map_div", {
    center: new Tmapv2.LatLng(y, x),
    width: "100%",
    height: "400px",
  });
};

export default initTmap;
