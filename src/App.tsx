import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "./Layout";
import Dashboard from "./pages/Dashboard";
import Episodes from "./pages/episode/Episodes";
import Characters from "./pages/character/Characters";
import Locations from "./pages/location/Locations";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/Episodes" element={<Episodes />} />
            <Route path="/Characters" element={<Characters />} />
            <Route path="/Locations" element={<Locations />} />
          </Route>
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </Router>
    </QueryClientProvider>
  );
}
