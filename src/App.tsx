import { Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { CardsModeProvider } from "src/context/ModeProvider";
import { ReactQueryProvider } from "src/context/ReactQueryProvider";

import "./App.css";
import theme from "./theme";
import { CardsRoute } from "./pages/Cards/route";
import { PrivateLayout } from "./components/Layout/Private";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ReactQueryProvider>
        <CardsModeProvider>
          <Routes>
            <Route element={<PrivateLayout />}>{[CardsRoute]}</Route>
          </Routes>
        </CardsModeProvider>
      </ReactQueryProvider>
    </ThemeProvider>
  );
}

export default App;
