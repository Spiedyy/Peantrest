import React from "react";
import { Navcomp } from "./navbar";
import { Cards } from "./card";

export default function Home() {
  return (
    <React.StrictMode>
      <Navcomp />
      <Cards />
    </React.StrictMode>
  );
}
