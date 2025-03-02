import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Redirect functionality
export const newPortfolioUrl =
  "https://portfolio-main-9w5s4rm7c-umesh-tiruvalluru-s-projects.vercel.app/"; // Replace with your actual new portfolio URL
let countdownSeconds = 10;

function startCountdown() {
  const countdownElement = document.getElementById("countdown");

  const interval = setInterval(() => {
    countdownSeconds -= 1;

    if (countdownElement) {
      countdownElement.textContent = countdownSeconds.toString();
    }

    if (countdownSeconds <= 0) {
      clearInterval(interval);
      window.location.href = newPortfolioUrl;
    }
  }, 1000);
}

// Render the app
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Start the countdown after the page loads
window.addEventListener("load", startCountdown);
