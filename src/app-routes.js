import { withNavigationWatcher } from "./contexts/navigation";
import ProductsPage from "./pages/ProductsPage";
import HomePage from "./pages/HomePage";

const routes = [
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/employees",
    component: ProductsPage,
  },
];

export default routes.map((route) => {
  return {
    ...route,
    component: withNavigationWatcher(route.component),
  };
});
