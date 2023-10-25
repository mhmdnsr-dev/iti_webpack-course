import { words } from "lodash";
import "./style/sass.scss";
import "./style/main.css";
import faviconImg from "./assets/images/favicon-webpack.png";
import randomImg from "./assets/images/usgs-hoS3dzgpHzw-unsplash.jpg";
import data from "./assets/data/data.json";
import "bootstrap/dist/js/bootstrap.bundle";

document.querySelector('link[rel="icon"]').setAttribute("href", faviconImg);
document.querySelector("#container2 img").src = randomImg;

console.log("json data ==>", data);
console.log("words ==>", words("Welcome to my website"));
