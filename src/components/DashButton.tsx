import React from "react";
import { Link } from "react-router-dom";

type DashButtonProps = {
  label: string;
};

export default function DashButton({ label }: DashButtonProps) {
  return (
    <Link
      to={`/${label}`}
      className="flex justify-center items-center bg-outerSpace-900 border-2 h-64 min-w-max p-6 border-springGreen-900 text-springGreen-900 rounded-3xl text-7xl"
    >
      {label}
    </Link>
  );
}
