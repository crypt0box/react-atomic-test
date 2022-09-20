import React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material";
import "./styles/index.scss";
import { Router } from "src/Router";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ja from "date-fns/locale/ja";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
      <StyledEngineProvider injectFirst>
        <Router />
      </StyledEngineProvider>
    </LocalizationProvider>
  </React.StrictMode>
);
