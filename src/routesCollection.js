import HomePage from "./components/home/HomePage";
import ErrorPage from "./components/shared/ErrorPage";

const routes = [
  {
    component: HomePage,
    url: "/",
    title: "Home",
    nav: true,
    home: true
  },
  {
    component: ErrorPage,
    url: "/404",
    title: "Error",
    nav: false,
    home: false
  }

];


export default routes;
