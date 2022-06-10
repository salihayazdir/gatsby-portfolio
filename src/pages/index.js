import React from "react"
import { NavProvider } from "../context/NavContext";
import App from "../components/App";

export default function Indexpage() {

  return (
  <NavProvider>
    <App/>
  </NavProvider>
  )
}
