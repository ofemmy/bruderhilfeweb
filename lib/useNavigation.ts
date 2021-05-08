import { useState } from "react";
const routeList = [
  { href: "/", name: "Home", active: false },
  { href: "/about", name: "About us", active: false },
  { href: "/projects", name: "Projects", active: false },
];
export function useNavigation() {
  const [routes, setRoutes] = useState(routeList);
  const setCurrentRoute = (pathName) => {
    const newRoutes = routes.map((route) =>
      route.href === pathName
        ? { ...route, active: true }
        : { ...route, active: false }
    );
    console.log(newRoutes);
    setRoutes(newRoutes);
  };
  // const setCurrent = (currentRoute) => {
  //   const updatedNavigation = state.map(
  //     updateNavigation.bind(null, currentRoute)
  //   );
  //   setState(updatedNavigation);
  // };
  // const getRoute = (routeName)=>{
  //   const route = state.find(navRoute=>navRoute.name===routeName);
  //   return route
  // }
  return { routes, setCurrentRoute };
}
