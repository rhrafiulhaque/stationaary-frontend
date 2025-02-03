import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import "./index.css";
import { store } from "./redux/store.ts";
import AuthCheckWrapper from "./utils/AuthCheckWrapper.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <AuthCheckWrapper />
      <Toaster />
    </Provider>
  </StrictMode>
);
