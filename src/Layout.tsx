import React from "react";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="min-h-screen bg-outerSpace-900 grid grid-rows-[auto_1fr]">
      <div className="text-center min-w-full text-springGreen-900 p-6">
        <h1 className="font-bold text-8xl">
          Rick <span className="text-6xl">&amp;</span> Morty
        </h1>
      </div>
      <main className="flex justify-center">
        <Outlet />
      </main>
    </div>
  );
}
