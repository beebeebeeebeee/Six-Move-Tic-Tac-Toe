import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./component/App.tsx";
import { AppProvider } from "./component/AppProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
