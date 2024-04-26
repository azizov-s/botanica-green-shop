import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Cart, Home, Layout, Product, Shop } from "./lazy";

export const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback="loading...">
        <Layout />
      </Suspense>
    ),
    path: "/",
    children: [
      {
        index: true,
        element: (
          <Suspense fallback="loading...">
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/shop",
        element: (
          <Suspense fallback="loading...">
            <Shop />
          </Suspense>
        ),
      },
      {
        path: "/shop/:id",
        element: (
          <Suspense fallback="loading...">
            <Product />
          </Suspense>
        ),
      },
      {
        path: "plant-care",
        element: "plant-care",
      },
      {
        path: "blogs",
        element: "blogs",
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback="loading...">
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);
