import HomePage from "./components/home/HomePage";
import BrandPage from "./components/brand/BrandPage";

const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage
  },
  {
    path: "/brand",
    component: BrandPage
  },
  {
    path: "/home",
    component: HomePage
    }
];

export default routes;
