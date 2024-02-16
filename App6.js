import React from "react";
import { createRoot } from "react-dom/client";

// this is a react element
const heading = <h1>HI</h1>;
const root = createRoot(document.getElementById("container"));
root.render(heading);
