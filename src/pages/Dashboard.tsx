import React from "react";
import DashButton from "../components/DashButton";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-3 items-center gap-3 max-w-7xl">
      <DashButton label="Episodes" />
      <DashButton label="Characters" />
      <DashButton label="Locations" />
    </div>
  );
}
