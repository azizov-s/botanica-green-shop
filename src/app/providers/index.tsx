import { FunctionComponent } from "react";
import { RouterProvider } from "react-router-dom";

import { router } from "../routes";
import "../styles/App.css";
import { NextUIProvider } from "@nextui-org/react";
import { QueryProvider } from "../queryProvider";

export const App: FunctionComponent = () => (
  <QueryProvider>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </QueryProvider>
);
