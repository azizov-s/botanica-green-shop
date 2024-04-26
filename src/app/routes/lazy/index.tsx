import { lazy } from "react";

export const Layout = lazy(() => import("../../../widgets/layout/index"));
export const Home = lazy(() => import("../../../pages/home/index"));
export const Shop = lazy(() => import("../../../pages/shop/index"));
export const Product = lazy(() => import("../../../pages/product/index"));
export const Cart = lazy(() => import("../../../pages/cart/index"));
