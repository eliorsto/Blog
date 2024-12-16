import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import NotFoundPage from "./components/pages/NotFoundPage";
import { NextUIProvider } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import NavigationBar from "./components/pages/NavigationBar";

const App: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return <>
    <NextUIProvider className={`${theme} text-foreground bg-background h-full w-full overflow-x-hidden`}>
      <Router>
        <header className="w-full">
          <NavigationBar />
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </NextUIProvider>
  </>
};

export default App;
