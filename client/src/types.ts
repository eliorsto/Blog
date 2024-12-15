import { FunctionComponent } from "react";
import HomePage from "./pages/HomePage";

type RouteHandler = {
    label: string;
    link: string;
    component: FunctionComponent;
    showInNavbar: boolean;
    loginNeeded?: boolean;
}

export const routesHandler: RouteHandler[] = [
    {
        label: "HomePage",
        link: "/",
        component: HomePage,
        showInNavbar: true
    },
] as const;