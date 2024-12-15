import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import { NextUIProvider } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App: React.FC = () => {
  const { theme } = useTheme();

  return <>
    <Provider store={store}>
      <NextUIProvider className={`${theme} text-foreground bg-background h-full w-full overflow-x-hidden`}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </NextUIProvider>
    </Provider>
  </>
};

export default App;
