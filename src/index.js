import React from 'react';
import { render } from "react-dom";
import Routes from "./routes";
import registerServiceWorker from "./registerServiceWorker";
import "./styles.scss";
import "font-awesome/css/font-awesome.css";
require("./favicon.ico");

render(<Routes/>, document.getElementById("root"));
registerServiceWorker();
