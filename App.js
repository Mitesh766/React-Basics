import React from "react"
import ReactDOM from "react-dom/client"
const heading1=React.createElement("h1",{id:"Head1"},"This is heading 1")
const heading2=React.createElement("h2",{id:"head2"},"This is heading 2")
const division=React.createElement("div",{id:"container"},[heading1,heading2])
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(division)