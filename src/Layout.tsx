import React from "react";
import { Outlet, Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";

export default function Layout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
