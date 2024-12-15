import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";
import { RootState } from "../redux/store";

const HomePage: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <div className={`h-screen w-full ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
      <h1 className="text-4xl font-bold ">Welcome to the Home Page</h1>
      <button
        className="mt-6 px-4 py-2 bg-gray-200 text-black dark:text-white rounded-lg shadow"
        onClick={() => dispatch(toggleTheme())}
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default HomePage;
