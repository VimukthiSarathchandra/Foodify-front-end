import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import SignInPage from "./pages/sign-in.page";
import { BrowserRouter, Route, Routes } from "react-router";
import SignUpPage from "./pages/sign-up.page";
import HomePage from "./pages/home.page";
import RootLayout from "./layouts/root.layout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
